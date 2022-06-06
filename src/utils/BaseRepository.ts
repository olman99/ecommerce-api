export interface BaseRepository<T> {
  findById(id: string): Promise<T | null>;
  findAll(): Promise<Array<T>>;
  create(object: T): Promise<boolean>;
  update(id: string, object: T): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}
