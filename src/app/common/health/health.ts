export class Health {
  status: string;
  components: {
    db: {
      status: string;
      details: {
        database: string;
        result: number;
        validationQuery: string;
      }
    };
    diskSpace: {
      status: string;
      details: {
        total: number;
        free: number;
        threshold: number;
      }
    };
    maxMemory: {
      status: string;
    };
    ping: {
      status: string;
    }
  };
}
