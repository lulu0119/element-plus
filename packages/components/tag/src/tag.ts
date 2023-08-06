import { buildProps } from '@element-plus/utils'
import { componentSizes } from '@element-plus/constants'

import type { ExtractPropTypes } from 'vue'

export const tagProps = buildProps({
  /**
   * @description type of Tag
   */
  type: {
    type: String,
    values: ['success', 'info', 'warning', 'danger', ''],
    default: '',
  },
  /**
   * @description whether Tag can be removed
   */
  closable: Boolean,
  /**
   * @description whether to disable animations
   */
  disableTransitions: Boolean,
  /**
   * @description whether Tag has a highlighted border
   */
  hit: Boolean,
  /**
   * @description background color of the Tag
   */
  color: {
    type: String,
    default: '',
  },
  /**
   * @description custom tag color, automatically calculate color for dark, light, and plain themes.
   */
  customTagColor: String,
  /**
   * @description dark mode, which automatically converts `color` to dark mode colors
   */
  dark: Boolean,
  /**
   * @description size of Tag
   */
  size: {
    type: String,
    values: componentSizes,
    default: '',
  },
  /**
   * @description theme of Tag
   */
  effect: {
    type: String,
    values: ['dark', 'light', 'plain'],
    default: 'light',
  },
  /**
   * @description whether Tag is rounded
   */
  round: Boolean,
} as const)
export type TagProps = ExtractPropTypes<typeof tagProps>

export const tagEmits = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent,
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type TagEmits = typeof tagEmits

export type TagInstance = InstanceType<typeof Tag>
