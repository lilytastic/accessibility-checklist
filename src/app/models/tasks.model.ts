export interface Task {
  criteria: string;
  name: string;
  tasks: {text: string, subtasks?: {text: string}[]}[];
  intent?: string;
  failure?: string;
}

export const CRITERIA = [
  {
    id: '1.1.1',
    name: 'Non-text Content',
    documents: {understanding: 'text-equiv-all'},
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
  },
  {
    id: '1.4.1',
    name: 'Use of Color',
    level: 'A'
  },
]

export const TASKS: Task[] = [
  {
    name: 'Alt Text',
    criteria: '1.1.1',
    intent: `Blind people can't see pictures.`,
    tasks: [{
      text: `Ensure all images have an <code>alt</code> attribute.`,
      subtasks: [
        {text: `Purely decorative images can have null alt text (<code>alt=""</code>) or be implemented with <code>background-image</code>.`},
        {text: `Images that have some function must have descriptive alt text (<code>alt="A football"</code>).`}
      ]
    }]
  },
  {
    name: 'Labels',
    criteria: '1.1.1',
    tasks: [
      {
        text: `Ensure form buttons have descriptive text.`,
        subtasks: [
          {text: `Example: if a cancel button is simply an icon like X or >, give it an alternative label like "Cancel" or "Next".`}
        ]
      },
      {
        text: `Ensure form inputs have an associated label. Do not rely on placeholder text.`,
        subtasks: [
          {text: `Use <code>aria-label</code> or <code>aria-labelledby</code> if needed`}
        ]
      }
    ]
  },
  {
    name: 'Captions',
    criteria: '1.2.4',
    tasks: [{text: `Ensure captions are provided for any and all live content`}]
  },
  {
    name: 'Sign Language (Prerecorded)',
    criteria: '1.2.6',
    tasks: [{text: `Ensure sign language interpretation is provided for all prerecorded audio content in synchronized media.`}]
  },
  {
    name: 'Markup',
    criteria: '1.3.1',
    tasks: [
      {
        text: `Ensure meaningful semantic markup is used whenever possible.`,
        subtasks: [
          {text: `This includes <code>h2</code> for second-level headings, <code>a</code> for links, <code>button</code> for buttons, etc.`},
          {text: `Do <b>not</b> rely on tags (<code>h1</code>, <code>h2</code>, <code>h3</code>, etc.), for styling.`}
        ]
      }
    ]
  },
  {
    name: 'Color',
    criteria: '1.4.1',
    tasks: [{text: `Ensure sign language interpretation is provided for all prerecorded audio content in synchronized media.`}]
  }
];
