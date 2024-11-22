// 题型枚举
export enum QUESTION_TYPE {
  TEXT = 'text',
  TEXTAREA = 'textarea',
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
  BINARY_CHOICE = 'binary-choice',
  RADIO_STAR = 'radio-star',
  RADIO_NPS = 'radio-nps',
  VOTE = 'vote'
}

// 题目类型标签映射对象
export const typeTagLabels: Record<QUESTION_TYPE, string> = {
  [QUESTION_TYPE.TEXT]: 'Single line input',
  [QUESTION_TYPE.TEXTAREA]: 'Multi-line input',
  [QUESTION_TYPE.RADIO]: 'Single Choice',
  [QUESTION_TYPE.CHECKBOX]: 'Multiple Selection',
  [QUESTION_TYPE.BINARY_CHOICE]: 'Judge',
  [QUESTION_TYPE.RADIO_STAR]: 'Star',
  [QUESTION_TYPE.RADIO_NPS]: 'NPS rate',
  [QUESTION_TYPE.VOTE]: 'Vote'
}

// 输入类题型
export const INPUT = [QUESTION_TYPE.TEXT, QUESTION_TYPE.TEXTAREA]

// 选择类题型分类
export const NORMAL_CHOICES = [QUESTION_TYPE.RADIO, QUESTION_TYPE.CHECKBOX]

// 选择类题型分类
export const CHOICES = [
  QUESTION_TYPE.RADIO,
  QUESTION_TYPE.CHECKBOX,
  QUESTION_TYPE.BINARY_CHOICE,
  QUESTION_TYPE.VOTE
]

// 评分题题型分类
export const RATES = [QUESTION_TYPE.RADIO_STAR, QUESTION_TYPE.RADIO_NPS]
