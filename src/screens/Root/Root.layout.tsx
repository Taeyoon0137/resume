"use client";

/**
 * Copyright 2024 Taeyoon Lee. All Right Reserved.
 *
 * This source code is licensed under the file found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useMemo, useState } from "react";

import { useLockBodyScroll } from "react-use";

import stylex from "@stylexjs/stylex";
import { AnimatePresence } from "framer-motion";

import { PageBackground } from "@/components";
import { IsModalOpenContext, ModalContext } from "@/contexts";

import { colors } from "../../styles/variable/colors.stylex";

import type { RootLayoutProps } from "./Root.type";

/**
 * ### RootLayout
 *
 * 루트 레이아웃입니다.
 * 상단에 추가 페이지를 열어 렌더링 할 수 있습니다.
 *
 * @param props {@link RootLayoutProps}
 * @layout
 */
const RootLayout = ({ modal, children }: RootLayoutProps) => {
  const [modalList, setModalList] = useState<string[]>([]);
  const isModalOpen = useMemo(getIsModalOpen, [modalList.length]);

  // 모달이 열려있을 때, body 스크롤을 막습니다.
  useLockBodyScroll(isModalOpen);

  /**
   * 모달이 1개 이상 열려있는지 확인합니다.
   *
   * @returns 모달이 열려있는지 여부
   */
  function getIsModalOpen(): boolean {
    return modalList.length > 0;
  }

  return (
    <html lang="kr">
      <body>
        {/* 배경 렌더링 */}
        <PageBackground style={styles.background} />

        {/* 페이지 처리 */}
        <IsModalOpenContext.Provider value={isModalOpen}>{children}</IsModalOpenContext.Provider>

        {/* 상위 페이지 처리 */}
        <ModalContext.Provider value={setModalList}>
          <AnimatePresence>{modal}</AnimatePresence>
        </ModalContext.Provider>

        {/* 불안정 경고 */}
        {/* <div {...stylex.props(styles.warningContainer)}>
          <div {...stylex.props(styles.warning)}>
            <Text kind="body-a2-semibold">현재 작업 중입니다.</Text>
            <Text kind="body-a3-regular" color={colors.contentGrayA2}>
              다소 불안정하거나, 불러와지지 않는 페이지가 있을 수 있습니다. 궁금한 사항이 있다면, 언제든 연락
              부탁드립니다.
            </Text>
          </div>
        </div> */}
      </body>
    </html>
  );
};

const styles = stylex.create({
  background: {
    position: "fixed",
    display: "block",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: -1,
  },
  warningContainer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    width: "100%",
    padding: 20,
  },
  warning: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 16,
    paddingBottom: 16,
    gap: 4,
    width: "100%",
    maxWidth: 360,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.lineOutline,
    borderRadius: 16,
    backgroundColor: colors.backgroundSolidCommon,
    boxShadow: `0 4px 20px 0px ${colors.lineSeparatorFill}`,
  },
});

export default RootLayout;
