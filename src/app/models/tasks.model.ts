export interface Task {
  criteria: string;
  name: string;
  description: string;
}

export const CRITERIA = [
  {
    id: '1.1.1',
    name: 'Non-text Content',
    level: 'A'
  },
  {
    id: '1.2.4',
    name: 'Captions (Live)',
    level: 'AA'
  },
  {
    id: '1.2.6',
    name: 'Sign Language (Prerecorded)',
    level: 'AAA'
  },
  {
    id: '1.3.1',
    name: 'Info and Relationships',
    level: 'A'
  }
]

export const TASKS: Task[] = [
  {
    name: 'Alt Text',
    criteria: '1.1.1',
    description: `
      <ul>
        <li>
          Ensure all images have an <code>alt</code> attribute.
          <ul>
            <li>Purely decorative images can have null alt text (<code>alt=""</code>) or be implemented with <code>background-image</code>.</li>
            <li>Images that have some function must have descriptive alt text (<code>alt="A football"</code>).</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    name: 'Labels',
    criteria: '1.1.1',
    description: `
      <ul>
        <li>
          Ensure form buttons have descriptive text.
          <ul>
            <li>Example: if a cancel button is simply an icon like X or >, give it an alternative label like "Cancel" or "Next"</li>
          </ul>
        </li>
        <li>
          Ensure form inputs have an associated label. Do not rely on placeholder text.
          <ul>
            <li>Use <code>aria-label</code> or <code>aria-labelledby</code> if needed.</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    name: 'Captions',
    criteria: '1.2.4',
    description: `
      <ul>
        <li>
          Ensure captions are provided for any and all live content.
        </li>
      </ul>
    `
  },
  {
    name: 'Sign Language (Prerecorded)',
    criteria: '1.2.6',
    description: `
      <ul>
        <li>
          Ensure sign language interpretation is provided for all prerecorded audio content in synchronized media.
        </li>
      </ul>
    `
  },
  {
    name: 'Markup',
    criteria: '1.3.1',
    description: `
      <ul>
        <li>
          Ensure meaningful semantic markup is used whenever possible
          <ul>
            <li>
              This includes <code>h2</code> for second-level headings, <code>a</code> for links, <code>button</code> for buttons, etc.
            </li>
            <li>
              Do <b>not</b> rely on tags (<code>h1</code>, <code>h2</code>, <code>h3</code>, etc.), for styling.
            </li>
          <ul>
        </li>
      </ul>
    `
  }
];
