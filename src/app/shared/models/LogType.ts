export class LogType {
    typeId: number;
    name: string;
    hasTasks: boolean;

    public static mapJsonResponse(objArray: Array<object>): LogType[] {
        return objArray.map(obj => {
            let type: LogType = {
                typeId: obj['TypeId'], 
                name: obj['Name'],
                hasTasks: obj['HasTasks'] === '1'
            };
            return type;
        });
    }
}