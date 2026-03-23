import React from 'react';
import { Skill, SkillCategory } from '@site/src/data/skills';
import styles from './styles.module.css';

function SkillBadge({ skill }: { skill: Skill }): JSX.Element {
  return (
    <span className={`${styles.badge} ${styles[`badge--${skill.category}`]}`}>
      {skill.name}
    </span>
  );
}

interface SkillSectionProps { skills: Skill[]; }

const CATEGORY_LABELS: Record<SkillCategory, string> = {
  language: '프로그래밍 언어',
  framework: '프레임워크 & 라이브러리',
  tool: '도구 & 플랫폼',
  database: '데이터베이스',
  other: '기타',
};

export function SkillSection({ skills }: SkillSectionProps): JSX.Element {
  const grouped = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <>
      {Object.entries(grouped).map(([category, categorySkills]) => (
        <div key={category} className={styles.categoryGroup}>
          <h3 className={styles.categoryTitle}>{CATEGORY_LABELS[category as SkillCategory] || category}</h3>
          <div>{categorySkills.map((skill) => <SkillBadge key={skill.name} skill={skill} />)}</div>
        </div>
      ))}
    </>
  );
}

export default SkillBadge;
