/**
 * Copyright 2024 Taeyoon Lee. All Right Reserved.
 *
 * This source code is licensed under the file found in the
 * LICENSE file in the root directory of this source tree.
 */

import stylex from "@stylexjs/stylex";

import { colors } from "../../styles/variable/colors.stylex";

import type { TagProps } from "./Tag.type";

import { Text } from "@/elements/Text";

/**
 * ### 태그
 *
 * 주제 혹은 목록을 표시할 때 이용할 수 있는 태그 컴포넌트입니다.
 *
 * @param props {@link TagProps}
 * @component
 */
const Tag = ({ label, pressable, style, ...props }: TagProps) => {
  return (
    <div {...stylex.props(styles.tag, style)} {...props}>
      <Text kind="body-a2-medium" color={colors.contentGrayA2} style={styles.label}>
        {label}
      </Text>
      {pressable && <div {...stylex.props(styles.dim)} />}
    </div>
  );
};

const styles = stylex.create({
  tag: {
    position: "relative",
    justifySelf: "baseline",
    alignSelf: "baseline",
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 8,
    backgroundColor: colors.contentGrayA4,
    overflow: "hidden",
  },
  dim: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: {
      default: "transparent",
      ":hover": colors.backgroundDimLoadCommon,
      ":active": colors.backgroundDimPressCommon,
    },
    transition: {
      default: "background-color 400ms",
      ":hover": "background-color 120ms",
      ":active": "background-color 120ms",
    },
  },
  label: {
    whiteSpace: "nowrap",
  },
});

export default Tag;
