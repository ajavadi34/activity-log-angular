export class Log {
    id : number;
    type: string;
    title: string;
    description: string;
    date: string;

    constructor() {

    }

    public static mapJsonResponse(objArray: Array<object>): Log[] {
        return objArray.map(obj => {
            let log: Log = {
                id: obj['Id'], 
                type: obj['Type'], 
                title: obj['Title'], 
                description: obj['Description'], 
                date: obj['Date']
            };
            return log;
        });
    }
}