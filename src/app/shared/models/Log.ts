export class Log {
    id : number;
    type: string;
    title: string;
    description: string;
    link: string;
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
                link: obj['Link'],
                date: obj['Date']
            };
            return log;
        });
    }
}