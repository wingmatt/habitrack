export interface TaskInterface {
  name: string,
  complete: boolean,
  accessibleBy?: string[]
}