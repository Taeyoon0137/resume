/**
 * Copyright 2024 Taeyoon Lee. All Right Reserved.
 *
 * This source code is licensed under the file found in the
 * LICENSE file in the root directory of this source tree.
 */

import SideProjectsPage from "./SideProjects.page";

/**
 * ### SideProjects
 *
 * 사이드 프로젝트 목록 페이지입니다.
 */
export const SideProjects = {
  /**
   * ### 페이지
   *
   * 페이지를 렌더링 할 수 있는 컴포넌트입니다.
   *
   * @param props {@link SideProjectsPageProps}
   * @page
   */
  Page: SideProjectsPage,
};

export * from "./SideProjects.type";
