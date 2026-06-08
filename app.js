const abilities = {
  business: {
    name: "业务定义力",
    question: "能否识别当前业务真正需要解决和沉淀的问题？",
    sigil: "◇",
    color: "#49a6ff",
    levels: [
      { label: "说清单次任务", requirement: "理解明确任务，补齐业务背景、必要输入、目标用户、发布渠道和输出要求。", evidence: "清晰 Brief / 输入输出要求" },
      { label: "识别可沉淀的 AI SOP", requirement: "从反复发生的任务中识别稳定业务流程，确认哪些环节值得沉淀，并定义目标、约束、优先级和成功标准。", evidence: "重复流程地图 / AI SOP 目标" },
      { label: "定义增长验证机制", requirement: "基于用户反馈与业务趋势，把稳定流程升级为可验证的新业务机制，例如从版本宣传升级为产品增长验证。", evidence: "增长机会地图 / 实验目标" },
    ],
  },
  ai: {
    name: "AI 转化力",
    question: "能否把业务问题转化成 AI 可执行方案？",
    sigil: "⌘",
    color: "#ffab45",
    levels: [
      { label: "完成单点 AI 任务", requirement: "选择合适的 AI 工具完成单点任务，并产出可用结果。", evidence: "工具选择 / 可用首版" },
      { label: "搭建人机协作 AI SOP", requirement: "把业务 SOP 拆解为人机协作流程，组合 Prompt、Skill、Agent、工具与人工节点。", evidence: "人机协作流程 / AI SOP" },
      { label: "设计端到端 AI 链路", requirement: "整合设计端到端 AI 链路，让 AI 从辅助执行变成业务系统的一部分。", evidence: "端到端链路 / 系统化运行" },
    ],
  },
  value: {
    name: "价值闭环力",
    question: "能否验证 AI 真的创造价值，并让结果持续运转？",
    sigil: "◎",
    color: "#72d69a",
    levels: [
      { label: "人工判断并修正", requirement: "判断 AI 输出是否基本可用，识别明显问题并完成人工修正。", evidence: "人工评审 / 可用结果" },
      { label: "建立质量与风险机制", requirement: "建立效果评估、质量标准、风险兜底和人工确认机制。", evidence: "评估标准 / 质量门禁" },
      { label: "让结果进入业务反馈循环", requirement: "让 AI 结果进入业务反馈循环，形成可复用资产、增长飞轮或组织级方法。", evidence: "反馈闭环 / 增长飞轮" },
    ],
  },
};

const rounds = [
  {
    kicker: "第一次发版 · 明确任务",
    title: "一句模糊需求，72 小时倒计时",
    story: "小希刚入职，运营希望用 AI 做一条宣传视频。所有人都在等他马上开始，但没人说清楚用户是谁、卖点是什么。",
    npc: ["运", "运营 · 23:47", "周五就要发，做得有科技感一点就好。"],
    objectives: { progress: 45, quality: 38 },
    cards: [
      ["brief", "business", "补齐任务要求", "补齐版本背景、目标用户、核心卖点、发布渠道与输出要求。", { quality: 18, insight: 12, progress: 4 }, "版本宣传 Brief"],
      ["generate", "ai", "直接生成首版", "用 AI 快速做出一个可讨论的样稿。", { progress: 28, quality: 6, risk: 9 }, "首版样稿"],
      ["tool", "ai", "匹配生成工具", "根据视频长度、风格和交付格式选择工具。", { progress: 16, quality: 12, risk: -3 }, "工具选择清单"],
      ["review", "value", "人工评审校对", "核对事实、卖点表达和渠道风险。", { quality: 20, progress: 6, risk: -12 }, "评审清单"],
      ["trend", "business", "追逐热门模板", "复制当下最热门的表达结构。", { progress: 18, quality: 4, risk: 15 }, null],
    ],
  },
  {
    kicker: "第二次发版 · 经验复用",
    title: "熟悉的需求，又来了",
    story: "第二次发版比预想中更早。上次交付的方法还散落在聊天记录里，团队正在重复同样的讨论。",
    npc: ["运", "运营 · 周一 09:12", "上次那条效果不错，这次也照着来一条？"],
    objectives: { progress: 56, quality: 48, insight: 18 },
    cards: [
      ["compare", "business", "比较两次需求", "标记重复目标、输入、约束和变化项。", { insight: 20, quality: 9, progress: 5 }, "重复模式地图"],
      ["reuse", "ai", "复用 Prompt 模板", "把有效输入结构与工具配置重新调用。", { progress: 25, quality: 11 }, "Prompt 模板 v2"],
      ["archive", "value", "记录评审与数据", "保留修改记录、发布数据和效果差异。", { insight: 18, quality: 10, risk: -5 }, "复盘记录"],
      ["fresh", "ai", "完全从零重做", "避免受上一次方案限制，重新探索。", { quality: 13, progress: 5, risk: 6 }, null],
      ["rush", "value", "沿用成片直接发布", "节约时间，但跳过本次差异确认。", { progress: 31, risk: 20, quality: -8 }, null],
    ],
  },
  {
    kicker: "多次发版 · 流程改造",
    title: "重复任务，显露出一条稳定流程",
    story: "版本宣传已经成为周期性任务。重复步骤足够稳定，小希需要确认哪些环节值得沉淀为可控、可复用的 AI SOP。",
    npc: ["研", "研发负责人 · 14:30", "这个季度还有四次发布，能不能让流程稳定跑起来？"],
    objectives: { progress: 65, quality: 62, risk: 28 },
    cards: [
      ["define", "business", "确认可沉淀的 AI SOP", "识别稳定重复的版本宣传流程，定义沉淀目标、约束、优先级与成功标准。", { insight: 20, quality: 14, risk: -4 }, "AI SOP 定义卡"],
      ["sop", "ai", "拆解人机协作 SOP", "组合 Prompt、Skill、Agent 与人工节点。", { progress: 30, quality: 13, risk: -5 }, "宣传工作流"],
      ["guard", "value", "建立质量与兜底", "设置评估指标、风险规则和人工确认。", { quality: 24, risk: -18, progress: 5 }, "质量门禁"],
      ["auto", "ai", "让 Agent 全权处理", "一次性自动化所有步骤，追求无人介入。", { progress: 35, risk: 27, quality: -6 }, null],
      ["speed", "business", "只优化生成速度", "将制作时间压缩一半。", { progress: 25, quality: -5, risk: 10 }, null],
    ],
  },
  {
    kicker: "流程稳定后 · 增长闭环",
    title: "播放量上涨，业务价值却没有动",
    story: "宣传流程已经稳定，内容产能显著提升。但数据看板显示：播放量增长，功能使用率却几乎没有变化。",
    npc: ["总", "产品负责人 · 复盘会", "我们做得更快了。但用户到底被什么打动？"],
    objectives: { quality: 68, insight: 64, risk: 22 },
    cards: [
      ["opportunity", "business", "定义增长验证机制", "把版本宣传升级为卖点实验与产品增长验证机制。", { insight: 28, quality: 10 }, "增长机会地图"],
      ["chain", "ai", "搭建端到端链路", "连接卖点实验、评论抓取、互动与转化分析。", { progress: 20, insight: 24, risk: -3 }, "增长验证链路"],
      ["flywheel", "value", "让结果反哺决策", "把洞察写入产品路线图与下一轮实验。", { insight: 25, quality: 15, risk: -8 }, "增长飞轮"],
      ["volume", "ai", "继续扩大内容产量", "用更多视频覆盖更多用户。", { progress: 30, insight: 5, risk: 13 }, null],
      ["dashboard", "value", "只建设数据看板", "让团队随时看见所有数据。", { insight: 15, progress: 10, risk: 4 }, "数据看板"],
    ],
  },
];

const state = {
  round: 0,
  focus: 3,
  selected: [],
  metrics: { progress: 15, quality: 15, insight: 5, risk: 12 },
  ability: { business: 0, ai: 0, value: 0 },
  growthBudget: 0,
  growthDraft: { business: 0, ai: 0, value: 0 },
  assets: [],
  history: [],
  pendingResult: null,
};

const $ = (selector) => document.querySelector(selector);
const els = {
  title: $("#title-screen"), game: $("#game-screen"), result: $("#result-overlay"), final: $("#final-screen"),
  roundTrack: $("#round-track"), missionStamp: $("#mission-stamp"), missionKicker: $("#mission-kicker"),
  missionTitle: $("#mission-title"), missionStory: $("#mission-story"), npcAvatar: $("#npc-avatar"),
  npcName: $("#npc-name"), npcMessage: $("#npc-message"), objectives: $("#objectives"),
  consequence: $("#consequence-note"), focusPips: $("#focus-pips"), metricStrip: $("#metric-strip"),
  actionGrid: $("#action-grid"), selectedPlan: $("#selected-plan"), launch: $("#launch-button"),
  rankLabel: $("#rank-label"), rankOrbit: $("#rank-orbit"), abilityStack: $("#ability-stack"),
  assetList: $("#asset-list"), resultGrade: $("#result-grade"), resultKicker: $("#result-kicker"),
  resultTitle: $("#result-title"), resultCopy: $("#result-copy"), resultMetrics: $("#result-metrics"),
  resultLog: $("#result-log"), resultNext: $("#result-next"), toast: $("#toast-layer"),
  growth: $("#growth-overlay"), growthGrid: $("#growth-grid"), growthPoints: $("#growth-points"), growthStage: $("#growth-stage"),
  growthConfirm: $("#growth-confirm"), finalSeal: $("#final-seal"),
  endingTitle: $("#ending-title"), endingSubtitle: $("#ending-subtitle"), endingCopy: $("#ending-copy"),
  endingQuote: $("#ending-quote"), finalAbilities: $("#final-abilities"), journeyMap: $("#journey-map"),
  finalAssets: $("#final-assets"), finalScore: $("#final-score"),
};

const metricInfo = {
  progress: ["交付进度", "#49a6ff"], quality: ["内容质量", "#ffbd59"],
  insight: ["用户洞察", "#72d69a"], risk: ["发布风险", "#ff645f"],
};

const roundStages = [
  { level: 0, label: "入门 · 完成明确任务" },
  { level: 0, label: "过渡 · 发现可复用经验" },
  { level: 1, label: "不错 · 改造重复流程" },
  { level: 2, label: "精通 · 形成业务反馈闭环" },
];

function clamp(value) { return Math.max(0, Math.min(100, value)); }
function abilityBonus(value) { return [0, 4, 8][Math.max(0, Math.min(2, value))]; }
function bonusTarget(effects) {
  const positive = Object.entries(effects)
    .filter(([key, value]) => key !== "risk" && value > 0)
    .sort((a, b) => b[1] - a[1]);
  if (positive.length) return positive[0][0];
  return effects.risk < 0 ? "risk" : null;
}
function rank() {
  return ["入门", "入门", "不错", "精通"][state.round];
}

function renderRoundTrack() {
  els.roundTrack.innerHTML = rounds.map((round, i) => `<div class="${i < state.round ? "done" : i === state.round ? "active" : ""}"><span>${i + 1}</span><small>${round.kicker.split(" · ")[0]}</small></div>`).join("");
}

function renderMetrics() {
  els.metricStrip.innerHTML = Object.entries(metricInfo).map(([key, [name, color]]) => `
    <div class="metric ${key}">
      <div><span>${name}</span><strong>${state.metrics[key]}</strong></div>
      <i><b style="width:${state.metrics[key]}%;background:${color}"></b></i>
    </div>`).join("");
}

function renderAbilities() {
  els.rankLabel.textContent = rank();
  els.rankOrbit.dataset.rank = rank();
  els.abilityStack.innerHTML = Object.entries(abilities).map(([key, ability]) => {
    const level = roundStages[state.round].level;
    return `<div class="ability-unit" style="--ability:${ability.color}">
      <div class="ability-sigil">${ability.sigil}</div>
      <div><span>${ability.name}</span><strong>${ability.levels[level].label}</strong>
      <small>${ability.levels[level].requirement}</small>
      <i>${[0,1,2].map(n => `<b class="${n <= level ? "on" : ""}"></b>`).join("")}</i></div>
      <em>累计投入 ${state.ability[key]}</em>
    </div>`;
  }).join("");
}

function renderAssets() {
  els.assetList.innerHTML = state.assets.length
    ? state.assets.slice(-6).map(asset => `<span>${asset}</span>`).join("")
    : "<small>尚无资产</small>";
}

function renderObjectives() {
  const round = rounds[state.round];
  els.objectives.innerHTML = Object.entries(round.objectives).map(([key, target]) => {
    const lowerBetter = key === "risk";
    const met = lowerBetter ? state.metrics[key] <= target : state.metrics[key] >= target;
    return `<div class="${met ? "met" : ""}"><span>${metricInfo[key][0]}</span><strong>${lowerBetter ? "≤" : "≥"} ${target}</strong></div>`;
  }).join("");
}

function renderCards() {
  const round = rounds[state.round];
  els.actionGrid.innerHTML = round.cards.map((card, index) => {
    const [id, ability, title, desc, effects, asset] = card;
    const selected = state.selected.includes(index);
    const level = roundStages[state.round].level;
    const bonus = abilityBonus(state.ability[ability]);
    const effectText = Object.entries(effects).map(([key, val]) => `<span class="${val < 0 ? "negative" : ""}">${metricInfo[key][0]} ${val > 0 ? "+" : ""}${val}</span>`).join("");
    return `<button class="action-card ${ability} ${selected ? "selected" : ""}" data-index="${index}" type="button" style="--ability:${abilities[ability].color}">
      <div class="card-top"><span class="card-cost">1</span><span class="card-type">运用 ${abilities[ability].name}</span><b>${abilities[ability].sigil}</b></div>
      <div class="card-art card-art-${id}"><i></i><i></i><i></i></div>
      <strong>${title}</strong><p>${desc}</p><div class="card-effects">${effectText}</div>
      <div class="card-access"><span>阶段要求：${abilities[ability].levels[level].label}</span><b>已有成长带来成效 +${bonus}</b></div>
      ${asset ? `<small>可沉淀：${asset}</small>` : `<small class="warning">无可复用资产</small>`}
    </button>`;
  }).join("");
  els.actionGrid.querySelectorAll(".action-card").forEach(card => card.addEventListener("click", () => toggleCard(Number(card.dataset.index))));
}

function renderSelection() {
  const names = state.selected.map(index => rounds[state.round].cards[index][2]);
  els.selectedPlan.innerHTML = [0,1,2].map(i => names[i] ? `<span>${i + 1}<b>${names[i]}</b></span>` : "<i></i>").join("");
  els.focusPips.innerHTML = [0,1,2].map(i => `<i class="${i < state.focus ? "on" : ""}"></i>`).join("");
  els.launch.disabled = state.selected.length === 0;
  els.launch.querySelector("small").textContent = state.selected.length ? `执行 ${state.selected.length} 项行动` : "至少选择 1 张行动卡";
  els.launch.querySelector("span").textContent = state.round === 0 ? "开始生成视频" : "执行发布";
}

function renderRound() {
  const round = rounds[state.round];
  state.focus = 3 - state.selected.length;
  els.missionStamp.textContent = `CASE 0${state.round + 1}`;
  els.missionKicker.textContent = round.kicker;
  els.missionTitle.textContent = round.title;
  els.missionStory.textContent = round.story;
  [els.npcAvatar.textContent, els.npcName.textContent, els.npcMessage.textContent] = round.npc;
  els.consequence.classList.toggle("hidden", state.round === 0);
  if (state.round > 0) els.consequence.textContent = state.history[state.round - 1].consequence;
  renderRoundTrack(); renderMetrics(); renderObjectives(); renderCards(); renderSelection(); renderAbilities(); renderAssets();
}

function toggleCard(index) {
  const existing = state.selected.indexOf(index);
  if (existing >= 0) state.selected.splice(existing, 1);
  else if (state.selected.length < 3) state.selected.push(index);
  else { toast("专注力已耗尽：先撤回一张行动卡", "risk"); return; }
  renderCards(); renderSelection();
}

function calculateResult() {
  const round = rounds[state.round];
  const before = { ...state.metrics };
  const log = [];
  state.selected.forEach(index => {
    const card = round.cards[index];
    const [, ability, title, , effects, asset] = card;
    Object.entries(effects).forEach(([key, val]) => state.metrics[key] = clamp(state.metrics[key] + val));
    const bonus = abilityBonus(state.ability[ability]);
    const target = bonusTarget(effects);
    if (target) state.metrics[target] = clamp(state.metrics[target] + (target === "risk" && effects[target] < 0 ? -bonus : bonus));
    if (asset && !state.assets.includes(asset)) state.assets.push(asset);
    log.push(`${title}${bonus ? ` · ${abilities[ability].name}加成 +${bonus}` : ""}${asset ? ` · 沉淀「${asset}」` : ""}`);
  });
  const passed = Object.entries(round.objectives).filter(([key, target]) => key === "risk" ? state.metrics[key] <= target : state.metrics[key] >= target).length;
  const grade = passed === Object.keys(round.objectives).length ? "A" : passed >= Object.keys(round.objectives).length - 1 ? "B" : "C";
  const consequence = grade === "A" ? "上轮交付稳定，团队愿意给小希更多决策空间。" : grade === "B" ? "上轮按时交付，但留下的问题开始进入下一次发版。" : "上轮发布留下明显风险，本轮需要额外承担修复成本。";
  if (grade === "C") state.metrics.risk = clamp(state.metrics.risk + 8);
  state.pendingResult = { before, log, grade, passed, consequence };
}

function showResult() {
  calculateResult();
  const r = state.pendingResult;
  const round = rounds[state.round];
  els.resultGrade.textContent = r.grade;
  els.resultGrade.dataset.grade = r.grade;
  els.resultKicker.textContent = `CASE 0${state.round + 1} · RELEASE REPORT`;
  els.resultTitle.textContent = r.grade === "A" ? "一次有证据的漂亮交付" : r.grade === "B" ? "任务完成，但代价开始显现" : "发布完成，风险进入下一轮";
  els.resultCopy.textContent = r.consequence;
  els.resultMetrics.innerHTML = Object.entries(metricInfo).map(([key, [name]]) => {
    const diff = state.metrics[key] - r.before[key];
    return `<div><span>${name}</span><strong>${state.metrics[key]}</strong><em class="${diff < 0 ? "negative" : ""}">${diff > 0 ? "+" : ""}${diff}</em></div>`;
  }).join("");
  els.resultLog.innerHTML = r.log.map(item => `<span>${item}</span>`).join("");
  els.resultNext.innerHTML = `<span>${state.round === rounds.length - 1 ? "完成最后一次能力升级" : "用交付证据升级三项能力"}</span><b>GROW</b>`;
  els.result.classList.remove("hidden");
}

function growthRemaining() {
  return state.growthBudget - Object.values(state.growthDraft).reduce((sum, value) => sum + value, 0);
}

function renderGrowthPhase() {
  const remaining = growthRemaining();
  const stage = roundStages[state.round];
  els.growthPoints.textContent = remaining;
  els.growthStage.textContent = stage.label;
  els.growthGrid.innerHTML = Object.entries(abilities).map(([key, ability]) => {
    const draft = state.growthDraft[key];
    const matchingActions = rounds[state.round].cards
      .map(card => ({ ability: card[1], title: card[2] }))
      .filter(action => action.ability === key);
    const actionPreview = matchingActions.map(action => action.title);
    return `<article class="growth-option" style="--ability:${ability.color}">
      <div class="growth-option-head"><span>${ability.sigil}</span><div><small>${ability.name}</small><strong>${ability.levels[stage.level].label}</strong></div><b>成长记录 ${state.ability[key]}</b></div>
      <p class="ability-question">${ability.question}</p>
      <div class="growth-levels">${ability.levels.map((level, index) => `<i class="${index === stage.level ? "current" : ""} ${index < stage.level ? "passed" : ""}"><span>${index + 1}</span><div><strong>${["入门","不错","精通"][index]} · ${level.label}</strong><small>${level.requirement}</small><em>可观察证据：${level.evidence}</em></div></i>`).join("")}</div>
      <div class="ability-impact"><span>本轮相关行动：${actionPreview.join("、")}</span><b>${draft ? "本轮已获得 1 点成长" : "等待用本轮证据升级"}</b></div>
      <div class="growth-controls">
        <button type="button" data-action="minus" data-ability="${key}" ${draft === 0 ? "disabled" : ""}>撤回</button>
        <strong>${draft ? `本轮 +${draft}` : "尚未投入"}</strong>
        <button type="button" data-action="plus" data-ability="${key}" ${remaining === 0 || draft === 1 ? "disabled" : ""}>升级 +1</button>
      </div>
    </article>`;
  }).join("");
  els.growthGrid.querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
    const { action, ability } = button.dataset;
    if (action === "plus" && growthRemaining() > 0 && state.growthDraft[ability] < 1) state.growthDraft[ability] += 1;
    if (action === "minus" && state.growthDraft[ability] > 0) state.growthDraft[ability] -= 1;
    renderGrowthPhase();
  }));
  els.growthConfirm.disabled = remaining > 0;
  els.growthConfirm.innerHTML = remaining > 0
    ? `<span>还有 ${remaining} 项能力需要升级</span><b>LOCKED</b>`
    : `<span>${state.round === rounds.length - 1 ? "确认升级，生成最终报告" : "确认升级，进入下一环节"}</span><b>CONTINUE</b>`;
}

function openGrowthPhase() {
  state.growthBudget = 3;
  state.growthDraft = { business: 0, ai: 0, value: 0 };
  renderGrowthPhase();
  els.growth.classList.remove("hidden");
}

function confirmGrowth() {
  if (growthRemaining() > 0) return;
  const upgrades = [];
  Object.entries(state.growthDraft).forEach(([key, value]) => {
    if (!value) return;
    state.ability[key] += value;
    upgrades.push(`${abilities[key].name}成长 +${value}`);
  });
  els.growth.classList.add("hidden");
  toast(upgrades.join("；"), "reward");
  advanceAfterGrowth();
}

function beginGrowthAfterResult() {
  state.history.push({ grade: state.pendingResult.grade, consequence: state.pendingResult.consequence, selected: [...state.selected], metrics: { ...state.metrics } });
  els.result.classList.add("hidden");
  openGrowthPhase();
}

function advanceAfterGrowth() {
  if (state.round === rounds.length - 1) { showFinal(); return; }
  state.round += 1; state.selected = []; state.focus = 3;
  renderRound();
}

function showFinal() {
  els.game.classList.add("hidden"); els.final.classList.remove("hidden");
  const total = state.metrics.progress + state.metrics.quality + state.metrics.insight - state.metrics.risk + state.assets.length * 4;
  const strongest = Object.entries(state.ability).sort((a,b) => b[1] - a[1])[0][0];
  const endings = {
    business: ["机会定义者", "他最擅长的不是接住需求，而是找到真正值得解决的问题。", "AI DRI 的起点，从来不是工具，而是对业务问题更清楚的定义。"],
    ai: ["流程架构师", "他把零散的工具与经验，组织成了团队可以稳定运行的 AI 链路。", "AI 不再是某个人的技巧，而成为业务系统的一部分。"],
    value: ["增长闭环者", "他让每次交付都留下证据，让 AI 结果持续反哺下一轮决策。", "真正的价值，不在一次产出，而在结果如何回到业务。"],
  };
  const ending = endings[strongest];
  els.finalSeal.textContent = total >= 270 ? "S" : total >= 220 ? "A" : "B";
  els.endingTitle.textContent = ending[0]; els.endingSubtitle.textContent = `小希的 AI DRI 最终画像 · ${rank()}级`;
  els.endingCopy.textContent = ending[1]; els.endingQuote.textContent = ending[2];
  els.finalAbilities.innerHTML = Object.entries(abilities).map(([key, ability]) => {
    const level = roundStages[state.round].level;
    return `<div style="--ability:${ability.color}"><span>${ability.sigil}</span><p><strong>${ability.name}</strong><small>${ability.levels[level].label}</small></p><b>投入 ${state.ability[key]}</b></div>`;
  }).join("");
  els.journeyMap.innerHTML = state.history.map((item, i) => `<div data-grade="${item.grade}"><span>0${i + 1}</span><strong>${rounds[i].kicker.split(" · ")[0]}</strong><small>${item.grade} 级交付</small></div>`).join("");
  els.finalAssets.textContent = `${state.assets.length} 项`; els.finalScore.textContent = `${Math.round(total)} 分`;
}

function toast(text, type) {
  const node = document.createElement("div"); node.className = `toast ${type}`; node.textContent = text;
  els.toast.appendChild(node); setTimeout(() => node.remove(), 2200);
}

function reset() {
  Object.assign(state, { round: 0, focus: 3, selected: [], metrics: { progress: 15, quality: 15, insight: 5, risk: 12 }, ability: { business: 0, ai: 0, value: 0 }, growthBudget: 0, growthDraft: { business: 0, ai: 0, value: 0 }, assets: [], history: [], pendingResult: null });
  els.title.classList.remove("hidden"); els.game.classList.add("hidden"); els.growth.classList.add("hidden"); els.result.classList.add("hidden"); els.final.classList.add("hidden");
}

$("#start-button").addEventListener("click", () => { els.title.classList.add("hidden"); els.game.classList.remove("hidden"); renderRound(); });
$("#restart-button").addEventListener("click", reset);
$("#replay-button").addEventListener("click", reset);
els.launch.addEventListener("click", showResult);
els.resultNext.addEventListener("click", beginGrowthAfterResult);
els.growthConfirm.addEventListener("click", confirmGrowth);
reset();
