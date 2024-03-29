import { TypeID, typeid } from 'typeid-js';

export type IdType<Prefix extends string> = `${Prefix}_${string}`;

export class Id<Prefix extends string> {
  public readonly type: IdType<Prefix>;

  constructor(public readonly prefix: Prefix) {
    this.type = `${this.prefix}_`;
  }

  generate(): IdType<Prefix> {
    return typeid(this.prefix).toString() as IdType<Prefix>;
  }

  is(id: unknown): id is IdType<Prefix> {
    if (typeof id !== 'string') {
      return false;
    }

    try {
      const typeId = TypeID.fromString(id);
      return typeId.getType() === this.prefix;
    } catch {
      return false;
    }
  }

  /**
   * @deprecated Use `is` instead
   */
  isValid(id: unknown): boolean {
    return this.is(id);
  }

  // TypeID

  getTypeId(id: IdType<Prefix>): TypeID<Prefix> {
    const typeId = TypeID.fromString(id);

    if (typeId.getType() !== this.prefix) {
      throw new Error(`Invalid id type: ${id}`);
    }

    return typeId as TypeID<Prefix>;
  }

  // Suffix

  getSuffix(id: IdType<Prefix>): string {
    return this.getTypeId(id).getSuffix();
  }

  fromSuffix(suffix: string): IdType<Prefix> {
    return typeid(this.prefix, suffix).toString() as IdType<Prefix>;
  }

  // UUID

  getUUID(id: IdType<Prefix>): string {
    return this.getTypeId(id).toUUID();
  }

  fromUUID(uuid: string): IdType<Prefix> {
    return TypeID.fromUUID(this.prefix, uuid).toString() as IdType<Prefix>;
  }

  // bytes

  getBytes(id: IdType<Prefix>): Uint8Array {
    return this.getTypeId(id).toUUIDBytes();
  }

  fromBytes(bytes: Uint8Array): IdType<Prefix> {
    return TypeID.fromUUIDBytes(
      this.prefix,
      bytes,
    ).toString() as IdType<Prefix>;
  }
}
