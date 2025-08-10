export interface CustomMentionItem {
  id: string; // 고유키
  label: string; // 화면/드롭다운에 보일 라벨
  value?: string; // 라벨 대신 표시할 값(없으면 label 사용)
  href?: string; // (선택) 링크용
  text: string; // (선택) 조건식/표현식 저장
  meta?: Record<string, unknown>; // (선택) 추가 데이터
}

/**
 * Plate의 mention 노드 형태 (type은 'mention' 고정: 플러그인 호환)
 * inline + void 가정 → children은 빈 텍스트 1개 유지
 */

export type CustomMentionNode = {
  type: "mention"; // ⚠️ 변경하지 말 것 (MentionPlugin이 기대)
  refId: string; // = item.id (역참조용)
  value: string; // 에디터에 보이는 텍스트(보통 label/value)
  href?: string;
  text: string;
  meta?: Record<string, unknown>;
  children: [{ text: "" }];
};
