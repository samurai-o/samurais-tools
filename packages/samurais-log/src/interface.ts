// 异常类型
export type CatchType = "promise" | "fetch" | "error" | "empty";

export type InfoType = "info" | "message";

// 异常信息
export type ICatch = {
    type: CatchType;
    message: Record<string, unknown> | string;
}

export type IMessage = {
    type: InfoType;
    message: Record<string, unknown> | string;
}