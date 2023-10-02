export default interface BasicMethods<E, O> {
  call(obj: E): Promise<O>
}
