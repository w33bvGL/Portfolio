<script setup lang="ts">
interface Props {
  variant?: 'solid' | 'gradient' | 'dotted' | 'dashed' | 'fade'
  orientation?: 'horizontal' | 'vertical'
  size?: 'sm' | 'md' | 'lg'
  align?: 'left' | 'center' | 'right'
  width?: string
  margin?: 'sm' | 'md' | 'lg' | 'none'
  withIcon?: boolean
  icon?: string
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'gradient',
  orientation: 'horizontal',
  size: 'md',
  align: 'center',
  margin: 'md'
})
</script>

<template>
  <div
    class="divider-root"
    :class="[
      `orientation-${orientation}`,
      `margin-${margin}`,
      { 'with-content': label || icon }
    ]"
  >
    <div
      v-if="label || icon"
      class="divider-content"
      :class="[`align-${align}`]"
    >
      <div
        v-if="orientation === 'horizontal' && (align === 'left' || align === 'center')"
        class="divider-line"
        :class="[`variant-${variant}`, `size-${size}`]"
      />

      <div class="content-wrapper">
        <Icon
          v-if="icon"
          :name="icon"
          class="divider-icon"
        />
        <span
          v-if="label"
          class="divider-label"
        >{{ label }}</span>
      </div>

      <div
        v-if="orientation === 'horizontal' && (align === 'right' || align === 'center')"
        class="divider-line"
        :class="[`variant-${variant}`, `size-${size}`]"
      />
    </div>

    <div
      v-else
      class="divider-line"
      :class="[`variant-${variant}`, `size-${size}`]"
    />
  </div>
</template>

<style scoped>
.divider-root {
  display: flex;
  width: 100%;
}

.divider-root.orientation-horizontal {
  flex-direction: column;
  min-height: 1px;
}

.divider-root.orientation-vertical {
  flex-direction: row;
  width: auto;
  height: 100%;

}

.divider-content {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;
}

.divider-content.align-left {
  justify-content: flex-start;
}

.divider-content.align-center {
  justify-content: center;
}

.divider-content.align-right {
  justify-content: flex-end;
}

.divider-line {
  flex: 1;
  border: none;
  background: var(--border-color);
  transition: all 0.3s ease;
}

.orientation-horizontal .divider-line {
  height: 1px;
}

.orientation-vertical .divider-line {
  height: 100%;
  width: 1px;
}

.size-sm {
  height: 1px;
}

.size-md {
  height: 1px;
}

.size-lg {
  height: 2px;
}

.variant-solid {
  background: var(--border-color);
}

.variant-gradient {
  background: linear-gradient(
    to right,
    transparent 0%,
    var(--border-color) 20%,
    var(--border-color) 80%,
    transparent 100%
  );
}

.orientation-vertical .variant-gradient {
  background: linear-gradient(
    to bottom,
    transparent 0%,
    var(--border-color) 20%,
    var(--border-color) 80%,
    transparent 100%
  );
}

.variant-dotted {
  background-image: radial-gradient(circle, var(--border-color) 1px, transparent 1px);
  background-size: 4px 4px;
  background-repeat: repeat-x;
}

.orientation-vertical .variant-dotted {
  background-size: 4px 4px;
  background-repeat: repeat-y;
}

.variant-dashed {
  background-image: linear-gradient(
    to right,
    var(--border-color) 50%,
    transparent 50%
  );
  background-size: 8px 1px;
  background-repeat: repeat-x;
}

.orientation-vertical .variant-dashed {
  background-image: linear-gradient(
    to bottom,
    var(--border-color) 50%,
    transparent 50%
  );
  background-size: 1px 8px;
  background-repeat: repeat-y;
}

.variant-fade {
  background: linear-gradient(
    to right,
    transparent 0%,
    var(--border-color) 10%,
    var(--border-color) 90%,
    transparent 100%
  );
}

.orientation-vertical .variant-fade {
  background: linear-gradient(
    to bottom,
    transparent 0%,
    var(--border-color) 10%,
    var(--border-color) 90%,
    transparent 100%
  );
}

.content-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.divider-icon {
  width: 1rem;
  height: 1rem;
  color: var(--text-muted);
}

.divider-label {
  font-size: var(--font-small);
  color: var(--text-muted);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
}

.margin-sm {
  margin: 1rem 0;
}

.margin-md {
  margin: 1.5rem 0;
}

.margin-lg {
  margin: 2rem 0;
}

.margin-none {
  margin: 0;
}

.orientation-vertical.margin-sm {
  margin: 0 1rem;
}

.orientation-vertical.margin-md {
  margin: 0 1.5rem;
}

.orientation-vertical.margin-lg {
  margin: 0 2rem;
}

.orientation-vertical.margin-none {
  margin: 0;
}
</style>
