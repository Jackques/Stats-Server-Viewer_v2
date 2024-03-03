import { DataType } from "./dataType.enum";

export interface ProjectKey {
    typeInnerValues?: DataType,
    dataType: DataType,
    keyName: string,
    innerListValues?: string[],
    innerMapValues?: ProjectKey[],
}