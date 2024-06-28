import { Map } from './map'
import { Set } from './set'

/**
 * This class is a representation of the Set data structure based on a hash map.
 *
 * @template K The value type.
 * @implements Set<K>
 * @property {Map<K, null>} map The map used to store the set.
 */
export abstract class MapSet<K> implements Set<K> {
  private map: Map<K, null>

  /**
   * @description Initializes a map object for the class, which is then assigned to the
   * class instance's `map` property.
   */
  constructor() {
    this.map = this.initMap()
  }

  /**
   * Initializes the map used to store the set.
   */
  protected abstract initMap(): Map<K, null>

  /**
   * @description Sets the value associated with a key in a map to `null`.
   * 
   * @param { K } value - key that will be deleted from the `map`.
   */
  add(value: K): void {
    this.map.set(value, null)
  }

  /**
   * Removes an element from the set.
   *
   * @param value The value to remove from the set.
   */
  delete(value: K): void {
    this.map.delete(value)
  }

  /**
   * @description Checks if a key exists in an object's map.
   * 
   * @param { K } value - value to be checked for existence within the `map` object of
   * the `this` context.
   * 
   * @returns { boolean } a boolean indicating whether the value is present in the map.
   */
  has(value: K): boolean {
    return this.map.has(value)
  }

  /**
   * @description Clears the map referenced by the object, removing all its entries.
   */
  clear(): void {
    this.map.clear()
  }

  /**
   * @description Retrieves an array of the keys from an object's map.
   * 
   * @returns { K[] } an array of keys from the `map`.
   */
  values(): K[] {
    return this.map.keys()
  }

  /**
   * @description Returns the size of a `Map`.
   * 
   * @returns { number } the size of the map.
   */
  getSize(): number {
    return this.map.getSize()
  }
}
