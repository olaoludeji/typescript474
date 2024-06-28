import { Map } from '../map/map'
import { HashMap } from '../map/hash_map'
import { MapSet } from './map_set'

/**
 * This class is a representation of the Set data structure based on a hash map.
 *
 * @template K The value type.
 * @extends MapSet<K>
 */
export class HashMapSet<K> extends MapSet<K> {
  /**
   * @description Initializes the properties and methods of a subclass, inherited from
   * its superclass.
   */
  constructor() {
    super()
  }

  /**
   * @description Generates a new instance of `Map`. The resulting map has no values
   * assigned to its key-value pairs.
   * 
   * @returns { Map<K, null> } a map with all key-value pairs set to `null`.
   */
  protected initMap(): Map<K, null> {
    return new HashMap<K, null>()
  }
}
