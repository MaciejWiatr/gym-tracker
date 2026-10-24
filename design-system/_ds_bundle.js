/* @ds-bundle: {"format":4,"namespace":"PJSGymDesignSystem_ff31cf","components":[{"name":"ActionRow","sourcePath":"components/content/ActionRow.jsx"},{"name":"ActionTile","sourcePath":"components/content/ActionTile.jsx"},{"name":"ExerciseRow","sourcePath":"components/content/ExerciseRow.jsx"},{"name":"MuscleRow","sourcePath":"components/content/MuscleRow.jsx"},{"name":"RoutineCard","sourcePath":"components/content/RoutineCard.jsx"},{"name":"SectionHeader","sourcePath":"components/content/SectionHeader.jsx"},{"name":"SetRow","sourcePath":"components/content/SetRow.jsx"},{"name":"StatTile","sourcePath":"components/content/StatTile.jsx"},{"name":"WorkoutHero","sourcePath":"components/content/WorkoutHero.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"ProgressDots","sourcePath":"components/feedback/ProgressDots.jsx"},{"name":"ProgressRing","sourcePath":"components/feedback/ProgressRing.jsx"},{"name":"Sheet","sourcePath":"components/feedback/Sheet.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Stepper","sourcePath":"components/forms/Stepper.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopBar","sourcePath":"components/navigation/TopBar.jsx"}],"sourceHashes":{"components/content/ActionRow.jsx":"70743d54275a","components/content/ActionTile.jsx":"4e8fe7a594c6","components/content/ExerciseRow.jsx":"bcaa0ad830fd","components/content/MuscleRow.jsx":"24dddf27ae5f","components/content/RoutineCard.jsx":"9b24f8b19a6f","components/content/SectionHeader.jsx":"dbb997200791","components/content/SetRow.jsx":"999dbe0ce92e","components/content/StatTile.jsx":"e9f9fcaad121","components/content/WorkoutHero.jsx":"ec65e02b3d7d","components/core/Badge.jsx":"3ab40e847ecf","components/core/Button.jsx":"01254a9a8e1c","components/core/Chip.jsx":"33a5eaf95f8b","components/core/Icon.jsx":"93a6c20bec46","components/core/IconButton.jsx":"0ca437647d11","components/feedback/ProgressBar.jsx":"1f56b46dc674","components/feedback/ProgressDots.jsx":"4495fde3e1f0","components/feedback/ProgressRing.jsx":"0931c0a5753f","components/feedback/Sheet.jsx":"54106eb3dfa2","components/feedback/Toast.jsx":"fb9b9902f51b","components/forms/Checkbox.jsx":"1485d4dbfbe4","components/forms/SegmentedControl.jsx":"ff8262127299","components/forms/Stepper.jsx":"07ff43cca109","components/forms/Switch.jsx":"bbb90db98d90","components/forms/TextField.jsx":"e042f28d86b5","components/navigation/TabBar.jsx":"30fd18f7e693","components/navigation/Tabs.jsx":"a9afeee20971","components/navigation/TopBar.jsx":"b3bb09817b75","ui_kits/member-app/ActiveWorkoutScreen.jsx":"e73b79e7a728","ui_kits/member-app/HomeScreen.jsx":"0d516545019b","ui_kits/member-app/Phone.jsx":"457f561f3121","ui_kits/member-app/ProgressScreen.jsx":"bd3e40d8a921","ui_kits/member-app/TrainScreen.jsx":"f1976f687871","ui_kits/member-app/WorkoutDetailScreen.jsx":"5ea5827374b0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PJSGymDesignSystem_ff31cf = window.PJSGymDesignSystem_ff31cf || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/MuscleRow.jsx
try { (() => {
function MuscleRow({
  name,
  percent = 0,
  max = 100,
  highlight = false,
  divider = true,
  style = {}
}) {
  const w = Math.max(0, Math.min(100, percent / (max || 100) * 100));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) 120px 48px",
      gap: 12,
      alignItems: "baseline",
      padding: "14px 0",
      borderBottom: divider ? "1px solid var(--border-subtle)" : "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: highlight ? 600 : 400
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: "center",
      height: 8,
      borderRadius: 2,
      background: "var(--data-track)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: w + "%",
      height: "100%",
      background: highlight ? "var(--data-1)" : "var(--text-3)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: "tabular-nums",
      fontSize: 16,
      textAlign: "right"
    }
  }, percent, "%"));
}
Object.assign(__ds_scope, { MuscleRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/MuscleRow.jsx", error: String((e && e.message) || e) }); }

// components/content/WorkoutHero.jsx
try { (() => {
function Media({
  src,
  radius = 0,
  style = {}
}) {
  return src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: radius,
      display: "block",
      ...style
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      borderRadius: radius,
      background: "radial-gradient(120% 90% at 60% 25%,#4A3540 0%,#2B1B21 45%,#120A0D 100%)",
      ...style
    }
  });
}
function WorkoutHero({
  image,
  eyebrow,
  title,
  height = 560,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      height,
      overflow: "hidden",
      background: "var(--ink-950)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement(Media, {
    src: image
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-bottom)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: 140,
      background: "var(--scrim-top)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "var(--gutter-screen)",
      right: "var(--gutter-screen)",
      bottom: 24,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      textAlign: "center"
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: "var(--text-2)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontStretch: "var(--stretch-display)",
      fontWeight: 800,
      fontSize: "var(--fs-display-l)",
      lineHeight: "var(--lh-display-l)",
      letterSpacing: "var(--tracking-display)",
      color: "#fff",
      textWrap: "balance"
    }
  }, title), children));
}
Object.assign(__ds_scope, { WorkoutHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/WorkoutHero.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const T = {
  accent: ["var(--accent)", "var(--text-on-accent)"],
  soft: ["var(--accent-soft)", "var(--text-accent)"],
  neutral: ["var(--surface-raised)", "var(--text-2)"],
  live: ["var(--pjs-flare)", "#FFFFFF"],
  success: ["rgba(46,113,81,.12)", "var(--status-success)"]
};
function Badge({
  children,
  tone = "neutral",
  style = {}
}) {
  const [bg, fg] = T[tone] || T.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      height: 22,
      padding: "0 8px",
      borderRadius: "var(--radius-pill)",
      background: bg,
      color: fg,
      fontSize: 12,
      fontWeight: 600,
      whiteSpace: "nowrap",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LUCIDE = "https://unpkg.com/lucide-static@0.469.0/icons/";
function Icon({
  name = "circle",
  size = 24,
  color = "currentColor",
  style = {},
  ...rest
}) {
  const url = "url(" + LUCIDE + name + ".svg)";
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: "inline-block",
      flex: "none",
      width: size,
      height: size,
      background: color,
      WebkitMask: url + " center/contain no-repeat",
      mask: url + " center/contain no-repeat",
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/ActionRow.jsx
try { (() => {
function ActionRow({
  items = [],
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-around",
      ...style
    }
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.label,
    type: "button",
    onClick: it.onClick,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      minWidth: 64,
      border: 0,
      background: "transparent",
      cursor: "pointer",
      color: it.active ? "var(--text-accent)" : "#fff",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 26
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--text-2)"
    }
  }, it.label))));
}
Object.assign(__ds_scope, { ActionRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ActionRow.jsx", error: String((e && e.message) || e) }); }

// components/content/ActionTile.jsx
try { (() => {
function ActionTile({
  icon,
  label,
  dashed = false,
  onClick,
  style = {}
}) {
  const [p, setP] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onPointerDown: () => setP(true),
    onPointerUp: () => setP(false),
    onPointerLeave: () => setP(false),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: dashed ? "center" : "flex-start",
      gap: 12,
      minHeight: 60,
      padding: "0 18px",
      borderRadius: "var(--radius-md)",
      border: dashed ? "1.5px dashed var(--border-dashed)" : 0,
      background: dashed ? "transparent" : "var(--surface-raised)",
      color: dashed ? "var(--text-accent)" : "var(--text-1)",
      fontFamily: "var(--font-body)",
      fontSize: 17,
      fontWeight: 600,
      cursor: "pointer",
      textAlign: "left",
      transform: p ? "scale(.98)" : "none",
      transition: "transform var(--dur-fast) var(--ease-standard)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22
  }), label);
}
Object.assign(__ds_scope, { ActionTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ActionTile.jsx", error: String((e && e.message) || e) }); }

// components/content/ExerciseRow.jsx
try { (() => {
function Media({
  src,
  radius = 0,
  style = {}
}) {
  return src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: radius,
      display: "block",
      ...style
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      borderRadius: radius,
      background: "radial-gradient(120% 90% at 60% 25%,#4A3540 0%,#2B1B21 45%,#120A0D 100%)",
      ...style
    }
  });
}
function ExerciseRow({
  name,
  meta,
  image,
  active = false,
  onClick,
  onMenu,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "10px 0",
      cursor: onClick ? "pointer" : "default",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      flex: "none",
      borderRadius: "var(--radius-sm)",
      overflow: "hidden",
      boxShadow: active ? "0 0 0 2px var(--accent)" : "none"
    }
  }, /*#__PURE__*/React.createElement(Media, {
    src: image
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: active ? "var(--text-accent)" : "var(--text-1)"
    }
  }, name), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-2)",
      fontVariantNumeric: "tabular-nums"
    }
  }, meta)), onMenu !== null && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => {
      e.stopPropagation();
      onMenu && onMenu();
    },
    "aria-label": "More",
    style: {
      border: 0,
      background: "transparent",
      color: "var(--text-2)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ellipsis",
    size: 22
  })));
}
Object.assign(__ds_scope, { ExerciseRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ExerciseRow.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeader.jsx
try { (() => {
function SectionHeader({
  title,
  action,
  actionIcon,
  onAction,
  collapsible = false,
  open = true,
  onToggle,
  muted = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      minHeight: 44,
      ...style
    }
  }, collapsible && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onToggle,
    style: {
      border: 0,
      background: "transparent",
      color: "var(--text-3)",
      padding: 0,
      cursor: "pointer",
      display: "flex",
      transform: open ? "none" : "rotate(-90deg)",
      transition: "transform var(--dur-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    onClick: collapsible ? onToggle : undefined,
    style: {
      flex: 1,
      fontSize: muted ? 17 : 22,
      fontWeight: muted ? 500 : 700,
      color: muted ? "var(--text-2)" : "var(--text-1)",
      cursor: collapsible ? "pointer" : "default"
    }
  }, title), action && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      border: 0,
      background: "transparent",
      color: "var(--text-accent)",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, action), actionIcon && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      border: 0,
      background: "transparent",
      color: "var(--text-1)",
      cursor: "pointer",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: actionIcon,
    size: 24
  })));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/content/StatTile.jsx
try { (() => {
function StatTile({
  label,
  value,
  unit,
  delta,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-1)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      minWidth: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: "var(--text-2)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontVariantNumeric: "tabular-nums",
      fontSize: "var(--fs-metric-l)",
      fontWeight: 800,
      lineHeight: 1
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      marginLeft: 4,
      opacity: .7
    }
  }, unit)), delta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-2)"
    }
  }, delta));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function usePress() {
  const [p, setP] = React.useState(false);
  return [p, {
    onPointerDown: () => setP(true),
    onPointerUp: () => setP(false),
    onPointerLeave: () => setP(false)
  }];
}
const V = {
  primary: {
    background: "var(--accent)",
    color: "var(--text-on-accent)"
  },
  secondary: {
    background: "var(--surface-inverse)",
    color: "var(--text-inverse)"
  },
  tonal: {
    background: "var(--surface-raised)",
    color: "var(--text-1)"
  },
  outline: {
    background: "transparent",
    color: "var(--text-1)",
    boxShadow: "inset 0 0 0 1.5px var(--border-strong)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-accent)"
  },
  danger: {
    background: "var(--pjs-flare)",
    color: "#fff"
  }
};
const S = {
  sm: {
    height: 36,
    padding: "0 14px",
    fontSize: 14,
    gap: 6,
    icon: 16
  },
  md: {
    height: 48,
    padding: "0 20px",
    fontSize: 16,
    gap: 8,
    icon: 20
  },
  lg: {
    height: 60,
    padding: "0 28px",
    fontSize: 18,
    gap: 10,
    icon: 22
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  fullWidth = false,
  shape = "pill",
  disabled = false,
  onClick,
  style = {}
}) {
  const [p, h] = usePress();
  const s = S[size];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick
  }, h, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      width: fullWidth ? "100%" : undefined,
      border: 0,
      borderRadius: shape === "pill" ? "var(--radius-pill)" : "var(--radius-md)",
      fontFamily: "var(--font-body)",
      fontSize: s.fontSize,
      fontWeight: 600,
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? .4 : 1,
      transform: p && !disabled ? "scale(var(--press-scale))" : "none",
      filter: p && !disabled ? "brightness(.92)" : "none",
      transition: "transform var(--dur-fast) var(--ease-standard), filter var(--dur-fast)",
      ...V[variant],
      ...style
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/RoutineCard.jsx
try { (() => {
function RoutineCard({
  title,
  exercises = [],
  meta,
  onStart,
  onMenu,
  startLabel = "Start Routine",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 14,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 1.2
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "var(--text-2)",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden"
    }
  }, exercises.join(", ")), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-2)",
      fontVariantNumeric: "tabular-nums"
    }
  }, meta)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onMenu,
    "aria-label": "More",
    style: {
      border: 0,
      background: "transparent",
      color: "var(--text-1)",
      cursor: "pointer",
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ellipsis",
    size: 22
  }))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    fullWidth: true,
    onClick: onStart
  }, startLabel));
}
Object.assign(__ds_scope, { RoutineCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/RoutineCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function Chip({
  children,
  selected = false,
  icon,
  onClick,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 36,
      padding: "0 14px",
      borderRadius: "var(--radius-pill)",
      border: 0,
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: 600,
      whiteSpace: "nowrap",
      background: selected ? "var(--surface-inverse)" : "var(--surface-raised)",
      color: selected ? "var(--text-inverse)" : "var(--text-1)",
      transition: "background var(--dur-base) var(--ease-standard)",
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function usePress() {
  const [p, setP] = React.useState(false);
  return [p, {
    onPointerDown: () => setP(true),
    onPointerUp: () => setP(false),
    onPointerLeave: () => setP(false)
  }];
}
const V = {
  overlay: {
    background: "var(--surface-overlay)",
    color: "#fff"
  },
  tonal: {
    background: "var(--surface-raised)",
    color: "var(--text-1)"
  },
  plain: {
    background: "transparent",
    color: "var(--text-1)"
  },
  accent: {
    background: "var(--accent)",
    color: "var(--text-on-accent)"
  },
  soft: {
    background: "var(--accent-soft)",
    color: "var(--text-accent)"
  }
};
function IconButton({
  icon,
  variant = "plain",
  size = 44,
  label,
  onClick,
  style = {}
}) {
  const [p, h] = usePress();
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label || icon,
    onClick: onClick
  }, h, {
    style: {
      width: size,
      height: size,
      minWidth: size,
      borderRadius: "var(--radius-pill)",
      border: 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      padding: 0,
      transform: p ? "scale(.96)" : "none",
      transition: "transform var(--dur-fast) var(--ease-standard)",
      ...V[variant],
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.5)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value = 0,
  segments,
  height = 6,
  color = "var(--data-1)",
  style = {}
}) {
  if (segments) return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      ...style
    }
  }, Array.from({
    length: segments
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      height,
      borderRadius: 999,
      background: i < value ? color : "var(--surface-field)",
      transition: "background var(--dur-base)"
    }
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: 999,
      background: "var(--surface-field)",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: Math.min(100, value) + "%",
      height: "100%",
      borderRadius: 999,
      background: color,
      transition: "width var(--dur-slow) var(--ease-emphasized)"
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressDots.jsx
try { (() => {
function ProgressDots({
  count = 5,
  index = 0,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      justifyContent: "center",
      ...style
    }
  }, Array.from({
    length: count
  }).map((_, i) => {
    const d = Math.abs(i - index);
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: i === index ? 24 : 8,
        height: 8,
        borderRadius: 999,
        background: i === index ? "var(--accent)" : "var(--text-3)",
        opacity: d > 3 ? .5 : 1,
        transition: "all var(--dur-base) var(--ease-standard)"
      }
    });
  }));
}
Object.assign(__ds_scope, { ProgressDots });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressDots.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressRing.jsx
try { (() => {
function ProgressRing({
  value = 0,
  size = 220,
  stroke = 14,
  color = "var(--data-1)",
  children,
  style = {}
}) {
  const r = (size - stroke) / 2,
    c = 2 * Math.PI * r;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: "rotate(-90deg)"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--surface-field)",
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: c * (1 - Math.min(100, value) / 100),
    style: {
      transition: "stroke-dashoffset var(--dur-slow) linear"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  }, children));
}
Object.assign(__ds_scope, { ProgressRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressRing.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Sheet.jsx
try { (() => {
function Sheet({
  open = true,
  title,
  children,
  onClose,
  style = {}
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 50,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-xl) var(--radius-xl) 0 0",
      padding: "10px var(--gutter-screen) 34px",
      boxShadow: "var(--shadow-sheet)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: "center",
      width: 40,
      height: 5,
      borderRadius: 999,
      background: "var(--border-strong)"
    }
  }), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      textAlign: "center"
    }
  }, title), children));
}
Object.assign(__ds_scope, { Sheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Sheet.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  message,
  icon = "check",
  tone = "neutral",
  style = {}
}) {
  const a = tone === "success";
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "12px 18px",
      borderRadius: 999,
      background: a ? "var(--accent)" : "var(--surface-inverse)",
      color: a ? "var(--text-on-accent)" : "var(--text-inverse)",
      fontSize: 15,
      fontWeight: 700,
      boxShadow: "var(--shadow-float)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  }), message);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked = false,
  onChange,
  size = 32,
  label,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("label", {
    onClick: () => onChange && onChange(!checked),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-sm)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: checked ? "var(--accent)" : "var(--surface-field)",
      color: "var(--text-on-accent)",
      transition: "background var(--dur-base) var(--ease-standard)"
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: Math.round(size * 0.6)
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/content/SetRow.jsx
try { (() => {
function SetRow({
  index,
  previous,
  weight,
  reps,
  done = false,
  onToggle,
  header = false,
  style = {}
}) {
  const cell = {
    fontVariantNumeric: "tabular-nums",
    fontSize: 16,
    fontWeight: 600,
    textAlign: "center"
  };
  const col = "40px 1fr 72px 64px 40px";
  if (header) return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: col,
      gap: 8,
      alignItems: "center",
      padding: "0 8px",
      fontSize: 13,
      fontWeight: 500,
      color: "var(--text-2)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "center"
    }
  }, "Set"), /*#__PURE__*/React.createElement("span", null, "Previous"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "center"
    }
  }, "kg"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "center"
    }
  }, "Reps"), /*#__PURE__*/React.createElement("span", null));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: col,
      gap: 8,
      alignItems: "center",
      padding: "6px 8px",
      borderRadius: "var(--radius-sm)",
      background: done ? "var(--accent-soft)" : "transparent",
      transition: "background var(--dur-base) var(--ease-standard)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...cell,
      color: done ? "var(--text-accent)" : "var(--text-1)"
    }
  }, index), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--text-3)",
      fontVariantNumeric: "tabular-nums"
    }
  }, previous || "—"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...cell,
      background: "var(--surface-field)",
      borderRadius: 8,
      padding: "6px 0"
    }
  }, weight), /*#__PURE__*/React.createElement("span", {
    style: {
      ...cell,
      background: "var(--surface-field)",
      borderRadius: 8,
      padding: "6px 0"
    }
  }, reps), /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    checked: done,
    size: 32,
    onChange: onToggle
  }));
}
Object.assign(__ds_scope, { SetRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SetRow.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function SegmentedControl({
  options = [],
  value,
  onChange,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      padding: 4,
      gap: 4,
      borderRadius: 999,
      background: "var(--surface-field)",
      ...style
    }
  }, options.map(o => {
    const a = o === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o,
      type: "button",
      onClick: () => onChange && onChange(o),
      style: {
        flex: 1,
        height: 36,
        border: 0,
        borderRadius: 999,
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: 14,
        fontWeight: 700,
        background: a ? "var(--surface-inverse)" : "transparent",
        color: a ? "var(--text-inverse)" : "var(--text-2)",
        transition: "background var(--dur-base) var(--ease-standard)"
      }
    }, o);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Stepper.jsx
try { (() => {
function Stepper({
  value = 0,
  step = 1,
  unit,
  min = 0,
  onChange,
  label,
  style = {}
}) {
  const set = v => onChange && onChange(Math.max(min, Math.round(v * 100) / 100));
  const b = {
    width: 44,
    height: 44,
    borderRadius: 999,
    border: 0,
    background: "var(--surface-field)",
    color: "var(--text-1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: "var(--text-2)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: b,
    onClick: () => set(value - step)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 88,
      textAlign: "center",
      fontVariantNumeric: "tabular-nums",
      fontSize: 32,
      fontWeight: 800,
      lineHeight: 1
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--text-2)",
      marginLeft: 4
    }
  }, unit)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: b,
    onClick: () => set(value + step)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: 20
  }))));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  label,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      cursor: "pointer",
      ...style
    },
    onClick: () => onChange && onChange(!checked)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 32,
      borderRadius: 999,
      padding: 3,
      background: checked ? "var(--accent)" : "var(--surface-field)",
      boxShadow: checked ? "none" : "inset 0 0 0 1.5px var(--border-strong)",
      transition: "background var(--dur-base) var(--ease-standard)",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 999,
      background: checked ? "var(--surface-card)" : "var(--text-3)",
      transform: checked ? "translateX(20px)" : "none",
      transition: "transform var(--dur-base) var(--ease-standard)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: "var(--text-1)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function TextField({
  label,
  value,
  placeholder,
  icon,
  onChange,
  type = "text",
  style = {}
}) {
  const [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--text-2)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      height: 52,
      padding: "0 16px",
      borderRadius: "var(--radius-md)",
      background: "var(--surface-field)",
      boxShadow: f ? "inset 0 0 0 1.5px var(--accent)" : "none",
      transition: "box-shadow var(--dur-fast)"
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    color: "var(--text-2)"
  }), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    placeholder: placeholder,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 0,
      background: "transparent",
      color: "var(--text-1)",
      fontFamily: "var(--font-body)",
      fontSize: 16
    }
  })));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabBar.jsx
try { (() => {
function TabBar({
  items = [],
  active,
  onChange,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      justifyContent: "space-around",
      padding: "8px 12px 26px",
      background: "var(--surface-app)",
      borderTop: "1px solid var(--border-subtle)",
      ...style
    }
  }, items.map(it => {
    const a = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      type: "button",
      onClick: () => onChange && onChange(it.id),
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        border: 0,
        background: "transparent",
        cursor: "pointer",
        color: a ? "var(--text-1)" : "var(--text-3)",
        fontFamily: "var(--font-body)",
        fontSize: 11,
        fontWeight: 700
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 56,
        height: 32,
        borderRadius: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: a ? "var(--accent)" : "transparent",
        color: a ? "var(--text-on-accent)" : "inherit",
        transition: "background var(--dur-base) var(--ease-standard)"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 22
    })), it.label);
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  active,
  onChange,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      overflowX: "auto",
      borderBottom: "1px solid var(--border-subtle)",
      padding: "0 var(--gutter-screen)",
      ...style
    }
  }, items.map(t => {
    const a = t === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      type: "button",
      onClick: () => onChange && onChange(t),
      style: {
        position: "relative",
        padding: "12px 0",
        border: 0,
        background: "transparent",
        cursor: "pointer",
        whiteSpace: "nowrap",
        fontFamily: "var(--font-body)",
        fontSize: 16,
        fontWeight: a ? 700 : 500,
        color: a ? "var(--text-1)" : "var(--text-2)"
      }
    }, t, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -1,
        height: 3,
        borderRadius: 3,
        background: a ? "var(--text-1)" : "transparent"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopBar.jsx
try { (() => {
function TopBar({
  title,
  leading,
  trailing,
  onLeading,
  onTrailing,
  overMedia = false,
  center,
  divider = false,
  style = {}
}) {
  const v = overMedia ? "overlay" : "plain";
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: "var(--topbar-height)",
      padding: "0 12px",
      borderBottom: divider ? "1px solid var(--border-subtle)" : "none",
      color: "var(--text-1)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44
    }
  }, leading && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: leading,
    variant: v,
    onClick: onLeading
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: "center",
      fontSize: 17,
      fontWeight: 700,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, center || title), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44
    }
  }, trailing && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: trailing,
    variant: v,
    onClick: onTrailing
  })));
}
Object.assign(__ds_scope, { TopBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/member-app/ActiveWorkoutScreen.jsx
try { (() => {
(() => {
  const {
    TopBar,
    SetRow,
    Button,
    Sheet,
    ProgressRing,
    ProgressBar,
    Icon,
    Badge
  } = window.PJSGymDesignSystem_ff31cf;
  function ActiveWorkoutScreen({
    onFinish,
    onClose
  }) {
    const init = {
      "Bench Press (Barbell)": [[82.5, 8, "80kg × 8"], [82.5, 8, "80kg × 8"], [82.5, 7, "80kg × 7"]],
      "Incline Bench Press (Dumbbell)": [[30, 10, "28kg × 10"], [30, 10, "28kg × 9"]]
    };
    const [done, setDone] = React.useState({});
    const [rest, setRest] = React.useState(null);
    const [fin, setFin] = React.useState(false);
    const [sec, setSec] = React.useState(1732);
    React.useEffect(() => {
      const t = setInterval(() => {
        setSec(s => s + 1);
        setRest(r => r === null ? null : r <= 1 ? null : r - 1);
      }, 1000);
      return () => clearInterval(t);
    }, []);
    const total = Object.values(init).reduce((a, b) => a + b.length, 0);
    const n = Object.values(done).filter(Boolean).length;
    const fmt = s => Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        paddingTop: 50,
        minHeight: 0,
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(TopBar, {
      leading: "chevron-down",
      onLeading: onClose,
      center: /*#__PURE__*/React.createElement("span", {
        style: {
          fontVariantNumeric: "tabular-nums",
          fontWeight: 800
        }
      }, fmt(sec)),
      trailing: "timer",
      onTrailing: () => setRest(90)
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 20px 12px"
      }
    }, /*#__PURE__*/React.createElement(ProgressBar, {
      value: n / total * 100
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: "auto",
        padding: "8px 12px 120px",
        display: "flex",
        flexDirection: "column",
        gap: 24
      }
    }, Object.entries(init).map(([ex, sets]) => /*#__PURE__*/React.createElement("div", {
      key: ex,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "0 8px 6px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 18,
        fontWeight: 700
      }
    }, ex), /*#__PURE__*/React.createElement(Icon, {
      name: "ellipsis",
      size: 22
    })), /*#__PURE__*/React.createElement(SetRow, {
      header: true
    }), sets.map(([w, r, p], i) => {
      const k = ex + i;
      return /*#__PURE__*/React.createElement(SetRow, {
        key: k,
        index: i + 1,
        previous: p,
        weight: w,
        reps: r,
        done: !!done[k],
        onToggle: v => {
          setDone({
            ...done,
            [k]: v
          });
          if (v) setRest(90);
        }
      });
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "tonal",
      size: "sm",
      icon: "plus",
      style: {
        margin: "4px 8px 0"
      }
    }, "Add set"))), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "plus",
      style: {
        margin: "0 8px"
      }
    }, "Add exercise")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 20,
        right: 20,
        bottom: 28,
        zIndex: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      fullWidth: true,
      onClick: () => setFin(true)
    }, "Finish \xB7 ", n, " of ", total, " sets")), rest !== null && /*#__PURE__*/React.createElement(Sheet, {
      title: "Rest",
      onClose: () => setRest(null)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(ProgressRing, {
      value: rest / 90 * 100,
      size: 200
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 52,
        fontWeight: 800,
        fontVariantNumeric: "tabular-nums"
      }
    }, fmt(rest)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "tonal",
      fullWidth: true,
      onClick: () => setRest(Math.max(1, rest - 15))
    }, "\u221215s"), /*#__PURE__*/React.createElement(Button, {
      variant: "tonal",
      fullWidth: true,
      onClick: () => setRest(rest + 15)
    }, "+15s"), /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      onClick: () => setRest(null)
    }, "Skip"))), fin && /*#__PURE__*/React.createElement(Sheet, {
      title: "Finish workout?",
      onClose: () => setFin(false)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        color: "var(--text-2)"
      }
    }, n, " of ", total, " sets logged \xB7 ", fmt(sec)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "success"
    }, "New PR: bench 82.5 kg")), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      fullWidth: true,
      onClick: onFinish
    }, "Save workout"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      fullWidth: true,
      onClick: () => setFin(false)
    }, "Keep going")));
  }
  window.ActiveWorkoutScreen = ActiveWorkoutScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/member-app/ActiveWorkoutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/member-app/HomeScreen.jsx
try { (() => {
(() => {
  const {
    SectionHeader,
    StatTile,
    Chip,
    Badge,
    Icon,
    IconButton,
    ProgressBar
  } = window.PJSGymDesignSystem_ff31cf;
  function FeatureTile({
    title,
    meta,
    tone,
    onClick,
    big
  }) {
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      style: {
        position: "relative",
        flex: "none",
        width: big ? "100%" : 200,
        height: big ? 300 : 240,
        borderRadius: big ? 36 : 28,
        overflow: "hidden",
        cursor: "pointer",
        background: tone || "radial-gradient(120% 90% at 60% 25%,#4A3540 0%,#2B1B21 45%,#120A0D 100%)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "var(--scrim-bottom)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 18,
        right: 18,
        bottom: 18,
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: "var(--text-2)"
      }
    }, meta), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontStretch: "125%",
        fontWeight: 800,
        fontSize: big ? 34 : 22,
        lineHeight: .95,
        color: "#fff"
      }
    }, title)), big && /*#__PURE__*/React.createElement(IconButton, {
      icon: "play",
      variant: "accent",
      size: 56,
      style: {
        position: "absolute",
        right: 18,
        top: 18
      }
    }));
  }
  function HomeScreen({
    onOpenWorkout
  }) {
    const [f, setF] = React.useState("All");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: "auto",
        padding: "60px 20px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontStretch: "125%",
        fontWeight: 900,
        fontSize: 22,
        textTransform: "uppercase"
      }
    }, "PJS", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--accent)"
      }
    }, " Gym")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "bell"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "user",
      variant: "tonal"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--text-2)",
        fontWeight: 600
      }
    }, "Thursday, June 27"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 26,
        fontWeight: 700,
        lineHeight: 1.1
      }
    }, "Morning, Jordan. You trained legs yesterday, so today is mobility.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: 13,
        fontWeight: 700
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-2)",
        fontWeight: 500
      }
    }, "This week"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontVariantNumeric: "tabular-nums"
      }
    }, "3 of 4 sessions")), /*#__PURE__*/React.createElement(ProgressBar, {
      segments: 4,
      value: 3
    })), /*#__PURE__*/React.createElement(FeatureTile, {
      big: true,
      title: /*#__PURE__*/React.createElement(React.Fragment, null, "Mobility", /*#__PURE__*/React.createElement("br", null), "and core"),
      meta: "Today \xB7 28 min",
      onClick: onOpenWorkout
    }), /*#__PURE__*/React.createElement(SectionHeader, {
      title: "Classes at PJS",
      action: "See all"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        overflowX: "auto",
        margin: "-6px -20px 0",
        padding: "0 20px"
      }
    }, /*#__PURE__*/React.createElement(FeatureTile, {
      title: "Power hour",
      meta: "6:30 pm \xB7 Studio 2"
    }), /*#__PURE__*/React.createElement(FeatureTile, {
      title: "Engine room",
      meta: "7:30 pm \xB7 Rig"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20,
        paddingTop: 4
      }
    }, /*#__PURE__*/React.createElement(StatTile, {
      label: "Volume this week",
      value: "12.4k",
      unit: "kg",
      delta: "Up 8% on last week"
    }), /*#__PURE__*/React.createElement(StatTile, {
      label: "New PRs",
      value: "3",
      delta: "Bench, row, squat"
    })));
  }
  window.HomeScreen = HomeScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/member-app/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/member-app/Phone.jsx
try { (() => {
(() => {
  const {
    Icon
  } = window.PJSGymDesignSystem_ff31cf;
  function Phone({
    children,
    theme,
    overlay
  }) {
    return /*#__PURE__*/React.createElement("div", {
      "data-theme": theme,
      style: {
        width: 390,
        height: 844,
        borderRadius: 48,
        overflow: "hidden",
        position: "relative",
        background: "var(--surface-app)",
        color: "var(--text-1)",
        boxShadow: "0 0 0 10px #1E1216, 0 30px 80px rgba(30,18,22,.35)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 50,
        zIndex: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "4px 32px 0 40px",
        fontSize: 16,
        fontWeight: 700,
        color: overlay ? "#fff" : "var(--text-1)",
        pointerEvents: "none"
      }
    }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "signal",
      size: 17
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "wifi",
      size: 17
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "battery-full",
      size: 20
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column"
      }
    }, children), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        bottom: 8,
        left: "50%",
        transform: "translateX(-50%)",
        width: 134,
        height: 5,
        borderRadius: 3,
        background: overlay ? "#fff" : "var(--text-1)",
        zIndex: 60
      }
    }));
  }
  window.Phone = Phone;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/member-app/Phone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/member-app/ProgressScreen.jsx
try { (() => {
(() => {
  const {
    TopBar,
    SegmentedControl,
    StatTile,
    MuscleRow,
    SectionHeader
  } = window.PJSGymDesignSystem_ff31cf;
  function ProgressScreen() {
    const [r, setR] = React.useState("Week");
    const bars = {
      Week: [40, 0, 72, 55, 0, 88, 30],
      Month: [60, 70, 50, 90],
      Year: [30, 45, 50, 60, 58, 70, 72, 80, 65, 85, 90, 76]
    }[r];
    const labels = {
      Week: ["M", "T", "W", "T", "F", "S", "S"],
      Month: ["W1", "W2", "W3", "W4"],
      Year: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"]
    }[r];
    const peak = bars.indexOf(Math.max(...bars));
    const peakLabel = {
      Week: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      Month: ["week 1", "week 2", "week 3", "week 4"],
      Year: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    }[r][peak];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        paddingTop: 50,
        minHeight: 0
      }
    }, /*#__PURE__*/React.createElement(TopBar, {
      title: "Progress",
      divider: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: "auto",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(SegmentedControl, {
      options: ["Week", "Month", "Year"],
      value: r,
      onChange: setR
    }), /*#__PURE__*/React.createElement("figure", {
      style: {
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        fontWeight: 700
      }
    }, "Volume peaked on ", peakLabel), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-end",
        gap: 6,
        height: 140,
        borderBottom: "1px solid var(--border-strong)"
      }
    }, bars.map((b, i) => {
      const pk = i === peak;
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          flex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 4
        }
      }, pk && /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13,
          fontWeight: 600,
          fontVariantNumeric: "tabular-nums"
        }
      }, (b * 60).toLocaleString(), " kg"), /*#__PURE__*/React.createElement("div", {
        style: {
          width: "100%",
          height: Math.max(2, b * 0.8) + "%",
          borderRadius: "4px 4px 0 0",
          background: pk ? "var(--data-1)" : "var(--data-4)",
          transition: "height var(--dur-base) var(--ease-standard)"
        }
      }));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6
      }
    }, labels.map((l, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        flex: 1,
        textAlign: "center",
        fontSize: 12,
        color: i === peak ? "var(--text-1)" : "var(--text-3)"
      }
    }, l))), /*#__PURE__*/React.createElement("figcaption", {
      style: {
        fontSize: 14,
        color: "var(--text-2)"
      }
    }, "Total weight lifted per ", r === "Year" ? "month" : r === "Month" ? "week" : "day", ". Bars start at zero.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(StatTile, {
      label: "Workouts",
      value: "4"
    }), /*#__PURE__*/React.createElement(StatTile, {
      label: "Time",
      value: "3h 12",
      unit: "m"
    }), /*#__PURE__*/React.createElement(StatTile, {
      label: "Volume",
      value: "12.4k",
      unit: "kg"
    }), /*#__PURE__*/React.createElement(StatTile, {
      label: "New PRs",
      value: "3",
      delta: "2 more than last week"
    })), /*#__PURE__*/React.createElement(SectionHeader, {
      title: "Glutes did the most work"
    }), /*#__PURE__*/React.createElement("div", null, [["Glutes", 14], ["Core", 10], ["Quads", 9], ["Shoulders", 9], ["Hamstrings", 8]].map(([n, p], i) => /*#__PURE__*/React.createElement(MuscleRow, {
      key: n,
      name: n,
      percent: p,
      max: 14,
      highlight: i === 0
    }))), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14,
        color: "var(--text-2)"
      }
    }, "Share of total working time this ", r.toLowerCase(), ". Remaining 50% spread across other muscles.")));
  }
  window.ProgressScreen = ProgressScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/member-app/ProgressScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/member-app/TrainScreen.jsx
try { (() => {
(() => {
  const {
    SectionHeader,
    ActionTile,
    RoutineCard,
    TopBar
  } = window.PJSGymDesignSystem_ff31cf;
  function TrainScreen({
    onStartRoutine
  }) {
    const [o1, setO1] = React.useState(true);
    const [o2, setO2] = React.useState(true);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        paddingTop: 50,
        minHeight: 0
      }
    }, /*#__PURE__*/React.createElement(TopBar, {
      title: "Train",
      divider: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: "auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(SectionHeader, {
      title: "Quick start"
    }), /*#__PURE__*/React.createElement(ActionTile, {
      icon: "plus",
      label: "Start Empty Workout",
      onClick: onStartRoutine
    }), /*#__PURE__*/React.createElement(SectionHeader, {
      title: "Routines",
      actionIcon: "folder-plus",
      style: {
        marginTop: 8
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(ActionTile, {
      icon: "clipboard-list",
      label: "New routine"
    }), /*#__PURE__*/React.createElement(ActionTile, {
      icon: "search",
      label: "Explore"
    })), /*#__PURE__*/React.createElement(SectionHeader, {
      title: "PPL (Push/Pull/Legs)",
      muted: true,
      collapsible: true,
      open: o1,
      onToggle: () => setO1(!o1),
      actionIcon: "ellipsis"
    }), o1 && /*#__PURE__*/React.createElement(ActionTile, {
      icon: "plus",
      label: "Add new routine",
      dashed: true
    }), /*#__PURE__*/React.createElement(SectionHeader, {
      title: "My Routines (1)",
      muted: true,
      collapsible: true,
      open: o2,
      onToggle: () => setO2(!o2),
      style: {
        marginTop: 12
      }
    }), o2 && /*#__PURE__*/React.createElement(RoutineCard, {
      title: "Push Day",
      exercises: ["Bench Press (Barbell)", "Incline Bench Press (Dumbbell)", "Shoulder Press (Dumbbell)", "Lateral Raise (Cable)", "Triceps Pushdown"],
      meta: "5 exercises \xB7 55 min",
      onStart: onStartRoutine
    })));
  }
  window.TrainScreen = TrainScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/member-app/TrainScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/member-app/WorkoutDetailScreen.jsx
try { (() => {
(() => {
  const {
    WorkoutHero,
    TopBar,
    ActionRow,
    Button,
    Tabs,
    ExerciseRow,
    MuscleRow,
    ProgressDots
  } = window.PJSGymDesignSystem_ff31cf;
  function WorkoutDetailScreen({
    onBack,
    onStart
  }) {
    const [saved, setSaved] = React.useState(false);
    const [tab, setTab] = React.useState("Workout Plan");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: "auto",
        background: "var(--ink-1000)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(TopBar, {
      overMedia: true,
      leading: "chevron-left",
      trailing: "settings",
      onLeading: onBack,
      center: /*#__PURE__*/React.createElement("span", {
        style: {
          fontVariantNumeric: "tabular-nums",
          fontSize: 22,
          fontWeight: 800,
          color: "#fff"
        }
      }, "28:00"),
      style: {
        position: "absolute",
        top: 50,
        left: 0,
        right: 0,
        zIndex: 5
      }
    }), /*#__PURE__*/React.createElement(WorkoutHero, {
      height: 600,
      eyebrow: "Thursday, June 27",
      title: /*#__PURE__*/React.createElement(React.Fragment, null, "Mobility", /*#__PURE__*/React.createElement("br", null), "and core")
    }, /*#__PURE__*/React.createElement(ActionRow, {
      style: {
        width: "100%",
        marginTop: 20
      },
      items: [{
        icon: "heart",
        label: "Save",
        active: saved,
        onClick: () => setSaved(!saved)
      }, {
        icon: "calendar-days",
        label: "Schedule"
      }, {
        icon: "send",
        label: "Share"
      }, {
        icon: "download",
        label: "Download"
      }]
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "8px 20px 24px"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      fullWidth: true,
      onClick: onStart
    }, "Start workout")), /*#__PURE__*/React.createElement(Tabs, {
      items: ["Workout Plan", "Body Activity", "Equipment"],
      active: tab,
      onChange: setTab
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "12px 20px 40px"
      }
    }, tab === "Workout Plan" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        padding: "12px 0 4px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 20,
        fontWeight: 700
      }
    }, "Mobility"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        color: "var(--text-2)",
        fontVariantNumeric: "tabular-nums"
      }
    }, "3 min")), /*#__PURE__*/React.createElement(ExerciseRow, {
      name: "Cat Cow",
      meta: "1m"
    }), /*#__PURE__*/React.createElement(ExerciseRow, {
      name: "World's Greatest Stretch",
      meta: "1m"
    }), /*#__PURE__*/React.createElement(ExerciseRow, {
      name: "Bear Plank",
      meta: "30s"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        padding: "20px 0 4px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 20,
        fontWeight: 700
      }
    }, "Core"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        color: "var(--text-2)",
        fontVariantNumeric: "tabular-nums"
      }
    }, "25 min")), /*#__PURE__*/React.createElement(ExerciseRow, {
      name: "Dead Bug",
      meta: "3 \xD7 12"
    }), /*#__PURE__*/React.createElement(ExerciseRow, {
      name: "Pallof Press",
      meta: "3 \xD7 10 each side"
    }), /*#__PURE__*/React.createElement(ExerciseRow, {
      name: "Hollow Hold",
      meta: "3 \xD7 30s"
    })), tab === "Body Activity" && /*#__PURE__*/React.createElement(React.Fragment, null, [["Core", 34], ["Glutes", 14], ["Hip flexors", 12], ["Obliques", 9], ["Shoulders", 6], ["Other muscles", 25]].map(([n, p], i) => /*#__PURE__*/React.createElement(MuscleRow, {
      key: n,
      name: n,
      percent: p,
      max: 34,
      highlight: i === 0
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "12px 0 0",
        fontSize: 14,
        color: "var(--text-2)"
      }
    }, "Share of total working time. Core carries a third of this session.")), tab === "Equipment" && /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--text-2)",
        padding: "16px 0"
      }
    }, "Mat \xB7 Loop band \xB7 Cable station")));
  }
  window.WorkoutDetailScreen = WorkoutDetailScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/member-app/WorkoutDetailScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ActionRow = __ds_scope.ActionRow;

__ds_ns.ActionTile = __ds_scope.ActionTile;

__ds_ns.ExerciseRow = __ds_scope.ExerciseRow;

__ds_ns.MuscleRow = __ds_scope.MuscleRow;

__ds_ns.RoutineCard = __ds_scope.RoutineCard;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.SetRow = __ds_scope.SetRow;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.WorkoutHero = __ds_scope.WorkoutHero;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.ProgressDots = __ds_scope.ProgressDots;

__ds_ns.ProgressRing = __ds_scope.ProgressRing;

__ds_ns.Sheet = __ds_scope.Sheet;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.TabBar = __ds_scope.TabBar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopBar = __ds_scope.TopBar;

})();
