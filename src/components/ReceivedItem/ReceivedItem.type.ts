/**
 * Copyright 2024 Taeyoon Lee. All Right Reserved.
 *
 * This source code is licensed under the file found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Props } from "@/types";

/**
 * ### ReceivedItem 프로퍼티
 *
 * 요약 항목을 표시하는 컴포넌트의 프로퍼티입니다.
 */
export interface ReceivedItemProps extends Props<HTMLDivElement, "title" | "children"> {
  /**
   * ### 제목
   *
   * 요약 항목의 제목입니다.
   */
  title: string;

  /**
   * ### 정보
   *
   * 요약 항목의 정보입니다.
   */
  info: React.ReactNode;

  /**
   * ### 캡션
   *
   * 요약 항목의 캡션입니다.
   */
  date: string;

  /**
   * ### 링크
   *
   * 요약 항목의 링크입니다.
   */
  link?: string;

  /**
   * ### 썸네일
   *
   * 썸네일 이미지입니다.
   */
  thumbnail?: any;
}
