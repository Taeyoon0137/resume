/**
 * Copyright 2024 Taeyoon Lee. All Right Reserved.
 *
 * This source code is licensed under the file found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PageModal } from "@/components";
import { Licenses } from "@/screens";

import type { PageProps } from "@/types";

/**
 * ### 자격증 목록 페이지
 *
 * 전체 자격증 목록을 확인할 수 있는 페이지입니다.
 *
 * @param props {@link PageProps}
 * @page
 */
const LicensesPage = ({ ...props }: PageProps) => {
  return (
    <PageModal>
      <Licenses.Page {...props} />
    </PageModal>
  );
};

export default LicensesPage;
