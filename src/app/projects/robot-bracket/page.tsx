import type { Metadata } from 'next';
import { ImageViewer } from '@/components/ImageViewer';
import { ProjectSection } from '@/components/ProjectSection';
import { SiteFooter, SiteHeader } from '@/components/SiteHeader';
import { sitePath } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Robot Joint Bracket Structural Optimization | Zhengshuang Liu',
  description: 'A traceable CAD, multi-load-case FEA and structural optimization workflow for a 6061-T6 robot joint bracket.',
};

const timeline = [
  ['V1', 'BASELINE', '0.518 kg', '保留接口并建立质量、刚度和强度基准。'],
  ['→', 'LOAD-PATH REVIEW', 'Evidence', '识别对主传力路径贡献较低的材料区域。'],
  ['V2', 'STRUCTURAL MODIFICATION', '0.453 kg', '在同一接口和载荷口径下进行首轮材料重分配。'],
  ['V3', 'FINAL DESIGN', '0.435 kg', '继续调整材料分布并完成精细网格校核。'],
];

export default function RobotBracketProject() {
  return (
    <main id="top" className="project-page">
      <SiteHeader project />

      <section className="project-hero project-hero-robot">
        <div className="shell project-hero-grid">
          <div>
            <p className="overline"><span /> PROJECT 01 · ROBOTICS STRUCTURE</p>
            <h1>Robot Joint Bracket<br /><em>Structural Optimization</em></h1>
            <p className="project-hero-lede">A lightweighting study that preserves interfaces and load paths, then verifies strength and stiffness through consistent multi-condition FEA.</p>
            <div className="project-tags"><span>SOLIDWORKS</span><span>ANSYS MECHANICAL</span><span>PYTHON</span><span>6061-T6</span></div>
          </div>
          <ImageViewer src={sitePath('/robot-bracket-fea.png')} alt="Robot joint bracket finite element result" caption="Final bracket · static structural analysis" className="hero-project-image" />
        </div>
      </section>

      <section className="project-summary-strip">
        <div><span>MASS REDUCTION</span><strong>16.0%</strong><small>0.518 → 0.435 kg</small></div>
        <div><span>GOVERNING STRESS</span><strong>32.919 MPa</strong><small>Fine mesh · LC3</small></div>
        <div><span>DEFORMATION</span><strong>0.006209 mm</strong><small>0.20 mm limit</small></div>
        <div><span>SAFETY FACTOR</span><strong>7.59</strong><small>250 MPa / 32.919 MPa</small></div>
      </section>

      <div className="project-sections shell">
        <ProjectSection index="01" label="OVERVIEW" title="The problem is not simply to remove material."
          visual={<ImageViewer src={sitePath('/assets/projects/robot-bracket/optimization-comparison.png')} alt="Robot bracket V1 V2 V3 development summary" caption="Baseline, intermediate and final design" />}>
          <p>机器人关节安装支架同时承担连接、定位与传力功能。轻量化必须与刚度、强度和可制造性共同评价，否则减重会转化为接口变形或局部失效风险。</p>
          <ul className="engineering-list"><li>目标：质量降低至少 15%</li><li>边界：安装孔、定位面和伺服接口保持不变</li><li>方法：同一材料、载荷和网格口径比较 V1 / V2 / V3</li></ul>
        </ProjectSection>

        <ProjectSection index="02" label="DESIGN REQUIREMENT" title="Convert operating conditions into measurable criteria."
          visual={<ImageViewer src={sitePath('/assets/projects/robot-bracket/design-input.png')} alt="Robot bracket design inputs and load calculation" caption="Load definition and acceptance criteria" />}>
          <p>设计输入以 3 kg 负载、500 mm 力臂和 2.0 动载系数建立保守力矩。验收不依赖视觉判断，而由应力、变形和质量目标共同约束。</p>
          <div className="parameter-stack"><div><span>DESIGN TORQUE</span><b>35 N·m</b></div><div><span>ALLOWABLE STRESS</span><b>125 MPa</b></div><div><span>DEFORMATION LIMIT</span><b>0.20 mm</b></div><div><span>MASS TARGET</span><b>≥15%</b></div></div>
        </ProjectSection>

        <ProjectSection index="03" label="CAD MODELING" title="Preserve interfaces. Reallocate structural material."
          visual={<ImageViewer src={sitePath('/mass-comparison.png')} alt="Mass comparison of robot bracket V1 V2 and V3" caption="Mass properties from three CAD iterations" />}>
          <p>支架采用 6061-T6 铝合金概念设计，面向 CNC 加工。三版模型保持相同的功能接口，使质量变化能够归因于结构材料分布，而不是改变安装需求。</p>
          <div className="decision-note"><span>CAD DECISION</span><p>保留孔位、定位面和主传力路径；材料去除集中在对整体承载贡献较低的区域，避免均匀削薄。</p></div>
        </ProjectSection>

        <ProjectSection index="04" label="SIMULATION SETUP" title="Evaluate multiple loads with one consistent model."
          visual={<ImageViewer src={sitePath('/assets/projects/robot-bracket/load-cases.png')} alt="Three robot bracket load cases" caption="LC1, LC2 and governing LC3" />} dark>
          <p>在 ANSYS Mechanical 中建立静力结构分析，以相同材料、接口约束和评价指标验证三类载荷。LC3 同时包含扭矩、轴向力与侧向载荷，是最不利机械组合。</p>
          <div className="flow-diagram"><span>CAD</span><b>→</b><span>CONTACT / SUPPORT</span><b>→</b><span>LC1—LC3</span><b>→</b><span>MESH STUDY</span></div>
          <p className="technical-note">网格从 6 mm 加密到 3 mm，并在关键区域采用 1 mm 局部网格；通过结果变化判断整体位移与局部峰值的不同收敛特征。</p>
        </ProjectSection>

        <ProjectSection index="05" label="RESULTS" title="Strength and stiffness remain well inside the criteria."
          visual={<ImageViewer src={sitePath('/assets/projects/robot-bracket/governing-case.png')} alt="Robot bracket governing LC3 FEA result" caption="Fine-mesh result for the governing case" />}>
          <p>V3 在 LC3 精细网格下的最大等效应力为 32.919 MPa，总变形为 0.006209 mm。采用 250 MPa 屈服强度计算，保守安全系数为 7.59。</p>
          <div className="result-ledger"><div><span>METRIC</span><span>RESULT</span><span>CRITERION</span></div><div><b>Stress</b><span>32.919 MPa</span><span>≤125 MPa</span></div><div><b>Deformation</b><span>0.006209 mm</span><span>≤0.20 mm</span></div><div><b>Mass reduction</b><span>16.0%</span><span>≥15%</span></div></div>
        </ProjectSection>

        <ProjectSection index="06" label="OPTIMIZATION" title="A traceable timeline from baseline to final design."
          visual={<ImageViewer src={sitePath('/assets/projects/robot-bracket/mesh-study.png')} alt="Robot bracket mesh sensitivity study" caption="Displacement convergence and local stress behavior" />}>
          <div className="optimization-timeline">
            {timeline.map(([v, title, value, body]) => <article key={`${v}-${title}`}><span>{v}</span><div><b>{title}</b><strong>{value}</strong><p>{body}</p></div></article>)}
          </div>
        </ProjectSection>

        <ProjectSection index="07" label="ENGINEERING CONCLUSION" title="The result is a verified design decision, not only a lighter CAD model."
          visual={<ImageViewer src={sitePath('/assets/projects/robot-bracket/python-workflow.png')} alt="Python verification workflow for robot bracket" caption="Reproducible acceptance checks and plots" />} dark>
          <p>V3 达到 16.0% 减重目标，同时满足强度和刚度要求。网格研究显示整体位移稳定收敛，而理想约束边缘的局部应力峰值对网格更敏感，因此最终采用最细网格结果进行保守校核。</p>
          <div className="conclusion-grid"><span><b>DESIGN</b>Interfaces and load path preserved</span><span><b>CAE</b>Three load cases and mesh sensitivity</span><span><b>DATA</b>Python acceptance workflow</span></div>
          <a className="button button-light" href={sitePath('/robot-joint-bracket-portfolio.pdf')} target="_blank" rel="noreferrer">VIEW FULL PDF REPORT <b>↗</b></a>
        </ProjectSection>
      </div>

      <section className="next-project"><div className="shell"><span>NEXT PROJECT</span><a href={sitePath('/projects/ball-valve/')}>Large All-Welded Fixed Ball Valve <b>↗</b></a></div></section>
      <SiteFooter />
    </main>
  );
}

