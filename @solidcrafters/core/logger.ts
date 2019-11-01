type LeveledLogMethod = (message: string, ...meta: any[]) => void

type Logger = {
  error: LeveledLogMethod
  warn: LeveledLogMethod
  info: LeveledLogMethod
}

export {
  Logger
}
