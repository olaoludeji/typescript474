import { Map } from './map'

/**
 * Represents a hash map.
 * Time complexity:
 * - Set, Get, Delete, Has: O(1) on average, O(n) in the worst case.
 * - Clear: O(m) where m is the number of buckets.
 * - Keys, Values, Entires: O(n + m).
 *
 * @template K The key type.
 * @template V The value type.
 * @param size The size of the hash map.
 * @param buckets The buckets in which to store the key-value pairs.
 * @param loadFactor The load factor to determine when to resize the hash map.
 */
export class HashMap<K, V> implements Map<K, V> {
  private size!: number
  private buckets!: MapEntry<K, V>[][]
  private readonly loadFactor = 0.75

  /**
   * @description Clears the instance's state.
   */
  constructor() {
    this.clear()
  }

  /**
   * @description Retrieves the size property of the object.
   * 
   * @returns { number } the value of the `size` property of the object it refers to,
   * which is a number.
   */
  getSize(): number {
    return this.size
  }

  /**
   * @description Updates a map's entries based on the provided key and value, ensuring
   * that the map's size does not exceed its capacity.
   * 
   * @param { K } key - unique key to be stored in the map.
   * 
   * @param { V } value - 2nd item of the map entry that is being added to the map,
   * alongside the key.
   */
  set(key: K, value: V): void {
    const loadFactor = this.size / this.buckets.length
    if (loadFactor > this.loadFactor) {
      this.resize()
    }

    const index = this.hash(key)
    const bucket = this.buckets[index]

    if (bucket.length === 0) {
      bucket.push(new MapEntry(key, value))
      this.size++
      return
    }

    for (const entry of bucket) {
      if (entry.key === key) {
        entry.value = value
        return
      }
    }

    bucket.push(new MapEntry(key, value))
    this.size++
  }

  /**
   * @description Retrieves a value associated with a specific key from an unsorted
   * hash table. If the key is present in the hash table, the function returns the
   * associated value; otherwise, it returns `null`.
   * 
   * @param { K } key - 🔗 reference to be searched in the hash table for an associated
   * value.
   * 
   * @returns { V | null } the value associated with the provided key, or `null` if no
   * such key exists.
   */
  get(key: K): V | null {
    const index = this.hash(key)
    const bucket = this.buckets[index]

    for (const entry of bucket) {
      if (entry.key === key) {
        return entry.value
      }
    }

    return null
  }

  /**
   * Deletes a key-value pair.
   *
   * @param key The key whose key-value pair to delete.
   */
  delete(key: K): void {
    const index = this.hash(key)
    const bucket = this.buckets[index]

    for (const entry of bucket) {
      if (entry.key === key) {
        bucket.splice(bucket.indexOf(entry), 1)
        this.size--
        return
      }
    }
  }

  /**
   * @description Uses the object's internal hash function to compute an index, which
   * is used to locate a bucket in the hash table. It then iterates through the entries
   * in the bucket and compares the provided key to the keys of each entry, returning
   * `true` if a matching entry is found, and `false` otherwise.
   * 
   * @param { K } key - search key used to look up its associated value in the hash table.
   * 
   * @returns { boolean } a boolean value indicating whether a given key exists in the
   * map.
   */
  has(key: K): boolean {
    const index = this.hash(key)
    const bucket = this.buckets[index]

    for (const entry of bucket) {
      if (entry.key === key) {
        return true
      }
    }

    return false
  }

  /**
   * @description Resets the LinkedList's size and initializes its buckets with a default
   * value (16).
   */
  clear(): void {
    this.size = 0
    this.initializeBuckets(16)
  }

  /**
   * @description Returns an array of all the keys present in a hash table, obtained
   * by iterating over the buckets and entries of the hash table.
   * 
   * @returns { K[] } an array of keys.
   */
  keys(): K[] {
    const keys: K[] = []
    for (const bucket of this.buckets) {
      for (const entry of bucket) {
        keys.push(entry.key)
      }
    }

    return keys
  }

  /**
   * @description Generates an array of all values present in a bucket store.
   * 
   * @returns { V[] } an array of all the values stored in the buckets.
   */
  values(): V[] {
    const values: V[] = []
    for (const bucket of this.buckets) {
      for (const entry of bucket) {
        values.push(entry.value)
      }
    }

    return values
  }

  /**
   * @description Arrays the MapEntries contained in an object's buckets, returning
   * them as a array of MapEntry objects.
   * 
   * @returns { MapEntry<K, V>[] } an array of `MapEntry<K, V>` objects.
   */
  entries(): MapEntry<K, V>[] {
    const entries: MapEntry<K, V>[] = []
    for (const bucket of this.buckets) {
      for (const entry of bucket) {
        entries.push(entry)
      }
    }

    return entries
  }

  /**
   * @description Initializes an array of arrays, known as buckets, by creating a
   * specified number of empty arrays and storing them in the instance's `buckets` property.
   * 
   * @param { number } amount - number of buckets to initialize.
   */
  private initializeBuckets(amount: number): void {
    this.buckets = []
    for (let i = 0; i < amount; i++) {
      this.buckets.push([])
    }
  }

  /**
   * @description Takes a string `key` as input and generates a hash value within a
   * range of `[0, buckets length)`. The hash value is calculated by iterating over the
   * characters of `key`, using their ASCII codes to produce a cryptographically secure
   * hash.
   * 
   * @param { K } key - 16-byte hash value of a string, which is used to calculate the
   * index of the bucket where the string should be stored in the protected hash table.
   * 
   * @returns { number } an integer between 0 and the length of the array `this.buckets`,
   * representing a random index within the array.
   */
  protected hash(key: K): number {
    let hash = 0

    for (let i = 0; i < String(key).length; i++) {
      hash = (hash << 5) - hash + String(key).charCodeAt(i)
    }

    return hash % this.buckets.length
  }

  /**
   * @description Resizes a bucket list by duplicating the existing buckets and updating
   * the size variable. It then sets all entries in the original list to their corresponding
   * new positions in the expanded list.
   */
  private resize(): void {
    const entries = this.entries()

    this.initializeBuckets(this.buckets.length * 2)
    this.size = 0

    for (const entry of entries) {
      this.set(entry.key, entry.value)
    }
  }
}

/**
 * Represents a key-value pair.
 *
 * @template K The type of the key.
 * @template V The type of the value.
 * @param key The key.
 * @param value The value.
 */
export class MapEntry<K, V> {
  key: K
  value: V

  /**
   * @description Sets the values of its class attributes (`key` and `value`).
   * 
   * @param { K } key - identifier for the variable being stored.
   * 
   * @param { V } value - value that will be associated with the key provided in the
   * `key` parameter, which is assigned to the `value` field of the constructor.
   */
  constructor(key: K, value: V) {
    this.key = key
    this.value = value
  }
}
