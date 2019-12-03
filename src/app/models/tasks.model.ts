export interface Task {
  criteria: string[];
  name: string;
  tasks: {text: string, subtasks?: {text: string}[]}[];
  intent?: string;
  failure?: string;
}

export const TASKS: Task[] = [
  {
    name: 'Descriptive Alt Text',
    criteria: ['1.1.1'],
    intent: `Visually-impaired users can't see pictures.`,
    tasks: [{
      text: `Ensure all images have an <code>alt</code> attribute.`,
      subtasks: [
        {text: `Any image that isn't purely for decoration must have descriptive alt text (<code>alt="A football"</code>).`},
        {text: `Purely decorative images can have null alt text (<code>alt=""</code>) or be implemented with <code>background-image</code>.`}
      ]
    }]
  },
  {
    name: 'Descriptive Labels',
    criteria: ['1.1.1'],
    intent: `Visual non-text communication (like icons) excludes non-sighted users. Likewise, the context of a form input may be obvious to a sighted user, but not to others. Placeholder text is often ignored by screen readers. Labels, when used properly, directly communicate the meaning of buttons and inputs in a way that is accessible and unambiguous.`,
    tasks: [
      {
        text: `Ensure form buttons have descriptive text.`,
        subtasks: [
          {text: `If a cancel button is simply an icon like X or >, give it an alternate label like "Cancel" or "Next".`}
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
    name: 'Transcripts',
    criteria: ['1.2.1'],
    intent: `Hearing-impaired users can't hear audio. Putting raw text in the browser is naturally accessible.`,
    tasks: [
      {text: `Ensure all prerecorded audio has transcripts.`},
    ]
  },
  {
    name: 'Video Content',
    criteria: ['1.2.1', '1.2.8'],
    intent: `Audio and video can exclude some users, so special care must be taken. Putting raw text in the browser is naturally accessible.`,
    tasks: [
      {
        text: `Ensure all prerecorded video either has transcripts, audio descriptions, or both.`,
        subtasks: [
          {
            text: `Audio descriptions can baked-in or available as a second user-selectable audio track.`,
          },
          {
            text: `This is not required if the video is silent.`
          }
        ]
      }
    ]
  },
  {
    name: 'Captions',
    criteria: ['1.2.4'],
    intent: `Hearing-impaired users can't hear audio.`,
    tasks: [{text: `Ensure all live audio is captioned.`}]
  },
  {
    name: 'Sign Language (Prerecorded)',
    criteria: ['1.2.6'],
    intent: `Hearing-impaired users can't hear audio.`,
    tasks: [{text: `Ensure sign language interpretation is provided for all prerecorded audio content in synchronized media.`}]
  },
  {
    name: 'Meaningful Semantic Markup',
    criteria: ['1.3.1'],
    intent: 'Screen readers read the DOM directly. The HTML must communicate meaning without the help of CSS.',
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
    name: 'Reliance on Color',
    criteria: ['1.4.1'],
    intent: `Relying on colour excludes colorblind and non-sighted users.`,
    tasks: [{
      text: `Ensure colour is never the sole means of communicating something.`,
      subtasks: [{
        text: `Rather than using a coloured dot to indicate status, you can use icons with distinct shapes, and add a label.`
      }]
    }]
  },
  {
    name: 'No Change on Focus',
    criteria: ['3.2.1'],
    intent: `Not all users can use a mouse, be it due to visual or movement impairment. Keyboard-only users rely on using <code>TAB</code> to change focus and navigate through the site, which you can try in this application. If simply navigating causes a modal to pop up, the user becomes disoriented, just like if a modal appeared as soon as you simply hovered over a button. Likewise, taking control of focus is equivalent to a site taking control of your mouse.`,
    tasks: [{
      text: `Ensure nothing changes the context of the page when it receives focus.`,
      subtasks: [
        {text: `"Change of context" is defined as changes to the user agent, viewport, focus, or any content that changes the meaning of the page.`},
        {text: `A tooltip appearing when a button receives focus does <b>not</b> violate this criteria, unless focus is then put on the tooltip.`},
        {text: `A modal/lightbox popping up when a button receives focus <b>does</b> violate this criteria.`}
      ]
    }]
  },
  {
    name: 'Identify User Errors',
    criteria: ['3.3.1'],
    tasks: [
      {text: `Ensure that if there is a problem with user input (in a form, for example), it is identified and explained to the user through text.`}
    ]
  },
  {
    name: 'Suggest Corrections',
    criteria: ['3.3.3'],
    tasks: [{
      text: `Ensure that if there is a problem with user input (in a form, for example), there are suggestions for how to correct it, if possible.`,
      subtasks: [
        {text: `If the user is asked to type in a particular month, but the app only accepts the month by name, and the user writes '12', inform the user of the desired format (in this case, 'December').`},
        {text: `Exceptions are made if doing so jeopardizes security or functionality.`}
      ]
    }]
  }
];

/*
- Ensure nothing changes the context of the page when it receives focus.

- "Change of context" is defined as changes in:
1) user agent;
2) viewport;
3) focus;
4) content that changes the meaning of the Web page

- Important for 4): "A change of CONTENT is not always a change of CONTEXT. Changes in content, such as an expanding outline, DYNAMIC MENU, or a tab control do not necessarily change the context, unless they also change one of the above (e.g., focus)." (emphasis added)

- So a tooltip appearing on hover/focus does not change context UNLESS you put the user's focus on the tooltip as soon as it appears.
- A modal/lightbox appearing on hover/focus would also change the context. Therefore:
- A button to open a modal should NOT open the model if a user presses TAB and switches focus to it. It should require the button to be pressed.
*/