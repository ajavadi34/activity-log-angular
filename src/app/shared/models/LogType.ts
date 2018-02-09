export class LogType {
    typeId: number;
    name: string;

    public static mapJsonResponse(objArray: Array<object>): LogType[] {
        return objArray.map(obj => {
            let type: LogType = {
                typeId: obj['TypeId'], 
                name: obj['Name']
            };
            return type;
        });
    }
}