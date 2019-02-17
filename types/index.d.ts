import database from 'firebase'
declare module '@use-firebase/database' {
  /**
   * A custom React Hook that provides a declarative useInterval..
   */
  export default function useValue(
    database: database,
    path: string,
    eventType?: string,
    initialValue?: any
  ): void;
}
