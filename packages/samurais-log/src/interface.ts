// 异常类型
export type CatchType = "promise" | "fetch" | "error" | "empty";

// 异常信息
export type ICatch = {
    type: CatchType;
    message: Record<string, unknown> | string;
}