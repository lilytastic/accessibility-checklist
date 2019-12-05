export interface Task {
  criteria: string[];
  name: string;
  tasks: {text: string, subtasks?: {text: string}[]}[];
  encapsulatedBy?: string[],
  related?: string[],
  intent?: string;
  failure?: string;
  documents?: {text: string, href: string}[];
}

export const TASKS: Task[] = [
  {
    name: 'Descriptive Alt Text',
    criteria: ['1.1.1'],
    intent: `Some visually-impaired users can't see pictures.`,
    tasks: [{
      text: `Ensure all images have an <code>alt</code> attribute.`,
      subtasks: [
        {text: `Any image that isn't purely for decoration must have descriptive alt text (<code>alt="A football"</code>).`},
        {text: `Purely decorative images can have null alt text (<code>alt=""</code>) or be implemented as a <code>background-image</code>.`}
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
    intent: `Some hearing-impaired users can't hear audio. Putting raw text in the browser is naturally accessible.`,
    tasks: [
      {text: `Ensure all prerecorded audio has transcripts.`},
    ]
  },
  {
    name: 'Described Video Content',
    criteria: ['1.2.1', '1.2.3', '1.2.5', '1.2.8'],
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
    criteria: ['1.2.2'],
    intent: `Some hearing-impaired users can't hear audio.`,
    tasks: [{text: `Ensure all prerecorded audio is captioned.`}]
  },
  {
    name: 'Live Captions',
    criteria: ['1.2.4'],
    intent: `Some hearing-impaired users can't hear audio.`,
    tasks: [{text: `Ensure all live audio is captioned.`}]
  },
  {
    name: 'Sign Language (Prerecorded)',
    criteria: ['1.2.6'],
    intent: `Some hearing-impaired users can't hear audio.`,
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
    name: 'Tab Sequence Matches Reading Order',
    criteria: ['1.3.2'],
    intent: `Not all users can use a mouse, be it due to visual or movement impairment. Keyboard-only users rely on using <code>TAB</code> to change focus and navigate through the site, which you can try in this application. It's important that the order of elements is intuitive, so it's standard to follow the reading order.`,
    tasks: [
      {
        text: `Ensure the arrangement of elements in the DOM matches the order in which those elements are read.`,
        subtasks: [
          {text: `For example, if three buttons are positioned on opposite corners of a page using <code>position: absolute</code>, the DOM must match their actual position relative to other elements.`}
        ]
      },
      {
        text: `If you don't have access to the DOM, use the keyboard to navigate through elements and ensure the sequence matches the order in which those elements are read.`
      }
    ],
    related: ['2.4.3'],
    documents: [{text: 'Technique C27: Making the DOM order match the visual order', href: 'https://www.w3.org/WAI/WCAG21/Techniques/css/C27.html'}]
  },
  {
    name: 'No Reliance on Senses',
    criteria: ['1.3.3'],
    intent: 'Relying on sensory characteristics excludes those whose senses are impaired.',
    tasks: [
      {
        text: `Ensure functionality and all related instructions don't rely on sensory data like shape, colour, or size to be understood.`,
        subtasks: [{text: `Rather than "Click the big blue button", say "Click the Submit button" and ensure the button has an associated "Submit" label.`}]
      }
    ]
  },
  {
    name: 'Allow Both Orientations',
    criteria: ['1.3.4'],
    intent: `Some users with mobility and/or vision impairment have a specialized display, and can't change its orientation.`,
    tasks: [
      {
        text: `Ensure site works in both portrait and landscape without loss of information, unless a specific orientation is essential.`,
        subtasks: [{text: `Examples where a particular display orientation may be essential are a bank check, a piano application, slides for a projector or television, or virtual reality content where binary display orientation is not applicable.`}]
      }
    ]
  },
  {
    name: 'Identify Input Purpose',
    criteria: ['1.3.5'],
    intent: 'This will make filling out forms much easier for users with cognitive disabilities.',
    tasks: [
      {
        text: `Ensure the purposes of all form inputs are communicated properly.`,
        subtasks: [
          {text: `The purpose of the field must be programmatically determinable for users with screen readers and other assistive technologies. Use appropriate labels and HTML attributes such as <code>autocomplete</code>.`}
        ]
      }
    ]
  },
  {
    name: 'No Reliance on Color',
    criteria: ['1.4.1'],
    intent: `Relying on colour excludes colorblind and non-sighted users.`,
    tasks: [{
      text: `Ensure colour is never the sole means of communicating something.`,
      subtasks: [{
        text: `Rather than using a coloured dot to indicate status, you can use icons with distinct shapes, and add a label for screen readers.`
      }]
    }]
  },
  {
    name: 'No Autoplay',
    criteria: ['1.4.2'],
    intent: `Individuals with screen readers navigate via audio, often using the same volume track as the app itself. If audio starts playing and the user doesn't have an easy means of stopping it, they're now unable to navigate.`,
    tasks: [
      {
        text: `Ensure the app never plays any audio over 3 seconds long automatically.`,
        subtasks: [{text: `This excludes chimes and notification sounds under 3 seconds long.`}]
      },
      {
        text: `If it's absolutely necessary for the app to function, ensure there's an easy and accessible means of silencing it.`,
        subtasks: [
          {text: `Specifically, users of screen readers must be able to silence it easily. See below.`},
          {text: `To pass, the volume must go to <i>zero</i>.`}
        ]
      }
    ]
  },
  {
    name: 'Contrast (1)',
    criteria: ['1.4.3', '1.4.11'],
    intent: `The standard contrast ratio keeps things readable, especially for users with low or impaired vision.`,
    encapsulatedBy: ['1.4.6'],
    tasks: [
      {
        text: `Ensure a contrast ratio of at least 3:1 on all text.`,
        subtasks: [
          {text: 'Text that is purely decorative is excluded. This includes logos.'}
        ]
      },
      {
        text: `Ensure a contrast ratio of at least 3:1 on any part of an image that's required to understand its content.`
      },
      {
        text: `Ensure a contrast ratio of at least 3:1 for any part of a UI element that's necessary to understand its state.`
      },
    ]
  },
  {
    name: `Allow 200% Zoom`,
    criteria: ['1.4.4'],
    encapsulatedBy: ['1.4.5'],
    intent: `Users with low or impaired vision will want to enlarge text to make it more readable, using the zoom function built into most browsers.`,
    tasks: [
      {
        text: `Ensure user can zoom in and enlarge text by at least 200% without assistive technologies.`,
        subtasks: [
          {text: `Do not use viewport units (<code>vw</code>/<code>vh</code>) for <code>font-size</code>, <code>line-height</code>, etc.`},
          {text: `To pass, text, controls, and images cannot be clipped when zoomed in at 200%.`}
        ]
      }
    ]
  },
  {
    name: 'No Images of Text (1)',
    criteria: ['1.4.5'],
    intent: `Screen readers can't read text when it's in an image.`,
    tasks: [
      {
        text: `Ensure there are no images of text, unless absolutely necessary.`,
        subtasks: [
          {text: `Exceptions apply if the image is customizable, such as a meme generator.`}
        ]
      }
    ]
  },
  {
    name: 'Contrast (2)',
    criteria: ['1.4.6'],
    intent: `The standard contrast ratio keeps things readable, especially for users with low or impaired vision.`,
    tasks: [
      {
        text: `Ensure a contrast ratio of at least 4.5:1 on all elements.`,
        subtasks: [
          {text: 'Text that is purely decorative is excluded. This includes logos.'}
        ]
      }
    ]
  },
  {
    name: 'No Images of Text (2)',
    criteria: ['1.4.9'],
    intent: `Screen readers can't read text when it's in an image.`,
    tasks: [
      {
        text: `Ensure there are no images of text, period.`
      }
    ]
  },
  {
    name: 'Allow 400% Zoom',
    criteria: ['1.4.10'],
    intent: `Users with low or impaired vision will want to enlarge text to make it more readable, using the zoom function built into most browsers.`,
    tasks: [
      {
        text: `Ensure that when the user zooms in by 400%, there is no loss of information, and that the user is not forced to scroll vertically <i>and</i> horizontally to see content.`,
      }
    ]
  },
  {
    name: 'Allow Text Spacing',
    criteria: ['1.4.12'],
    intent: `Users with low or impaired vision will want to enlarge text to make it more readable, using the zoom function built into most browsers.`,
    tasks: [
      {
        text: `Ensure that users can change text attributes without breaking the layout.`,
        subtasks: [
          {text: `Ensure you can set <em>all</em> the following attributes without breaking functionality or content:<ul><li>Line height: 1.5em</li><li>Spacing following paragraphs: 2em</li><li>Letter spacing: 1.12em</li><li>Word spacing: 1.16em</li></ul>`},
          {text: `Most browsers have developer tools that allow this. There's also an enclosed 'Text Spacing Bookmarklet' that will automatically set these attributes for you (see below).`}
        ]
      }
    ],
    documents: [{text: 'Text Spacing Bookmarklet', href: `https://www.html5accessibility.com/tests/tsbookmarklet.html`}]
  },
  {
    name: 'Tooltips, etc.',
    criteria: ['1.4.13'],
    intent: `The goal is to design interactions in such a way that users can both perceive the additional content, and dismiss it without disrupting their experience. For users of assistive technologies, showing and hiding content in coordination with hover/focus is frustrating and difficult, unless we follow this criteria.`,
    tasks: [
      {
        text: `Ensure any content that appears on hover or focus &ndash; such as tooltips &ndash; are persistent, hoverable, and dismissable.`,
        subtasks: [
          {text: `"Persistent" means the content remains on the screen until it is no longer relevant, disappearing when the user dismisses it or hovers/focuses elsewhere.`},
          {text: `"Hoverable" means the user can move their cursor <em>off</em> whatever triggered the content to appear, and hover/focus on the new content <em>without it disappearing</em>.`},
          {text: `"Dismissable" means the user can get rid of the content <em>without moving the cursor or changing focus</em>. It's sufficient to let the user close the tooltip by pressing the <code>ESC</code> key.`}
        ]
      }
    ]
  },
  {
    name: 'Keyboard Functionality',
    criteria: ['2.1.1'],
    intent: 'Not all users can use a mouse, be it due to visual or movement impairment. Keyboard-only users rely on using <code>TAB</code> to change focus and navigate through the site, which you can try in this application.',
    tasks: [
      {text: "Ensure every interactive element can receive focus by using <code>TAB</code> on the keyboard."},
      {
        text: "Ensure every interactive element is usable using only the keyboard.",
        subtasks: [
          {text: `<code>ENTER</code> should activate buttons and links, arrow keys should navigate through carousels, etc.`},
          {text: `Meaningful semantic markup is helpful here; most HTML elements have built-in keyboard support.`}
        ]
      }
    ]
  },
  {
    name: 'No Keyboard Trap',
    criteria: ['2.1.2'],
    intent: 'Not all users can use a mouse, be it due to visual or movement impairment. Keyboard-only users rely on using <code>TAB</code> to change focus and navigate through the site, which you can try in this application. Manipulating focus is equivalent to a site taking control of your cursor.',
    tasks: [
      {
        text: `Ensure that focus is never 'trapped' without the user having an easy means to untrap themselves.`,
        subtasks: [
          {text: `For example, if focus is trapped inside a modal or overlay &ndash; which may be necessary for good UX! &ndash; let the user know they can use <code>ESC</code> to close it.`}
        ]
      }
    ]
  },
  {
    name: 'Unintrusive Keyboard Shortcuts',
    criteria: ['2.1.4'],
    intent: 'Users may hit keys by accident, especially if they have impaired mobility or use speech input.',
    tasks: [
      {
        text: `Ensure that all keyboard shortcuts are unintrusive for users.`,
        subtasks: [
          {text: `
            If a keyboard shortcut is only one key, <em>and</em> that key is either a letter, number, symbol, or punctuation (keys people are likely to use for other things), then ensure that either:
            <ol>
              <li>
                1) the shortcut only fires when keyboard focus is on a particular element
                2) the user is able to turn the shortcut off
                3) the user is able to remap the shortcut to include <code>Ctrl</code>, <code>Alt</code>, <code>Shift</code>, etc.
              </li>
            </ol>
          `},
          {text: `...Or just make all keyboard shortcuts require a modifier key (<code>Ctrl</code>, <code>Alt</code>, <code>Shift</code>).`}
        ]
      }
    ]
  },
  {
    name: `No Timed Challenges`,
    criteria: ['2.2.1'],
    intent: 'Time limits are disproportionally challenging for users of assistive technologies, as well as those with low mobility or cognitive impairments.',
    tasks: [
      {
        text: `Ensure there are no unnecessary time limits.`,
        subtasks: [
          {text: `Time limits are allowed if the user can pause, adjust, or extend the timer at least 20 seconds before it expires.`},
          {text: `Exceptions apply if the time limit is longer than 20 hours, is essential for the app to function, or is based on some real-world timer (like an auction) for which no alternative exists.`}
        ]
      }
    ]
  },
  {
    name: 'No Blinking',
    criteria: ['2.2.2'],
    intent: `Users with cognitive disabilities can be vulnerable to distraction, and may be strongly affected by flashing or scrolling content.`,
    tasks: [
      {
        text: 'Ensure all moving content can be paused and/or hidden.',
        subtasks: [
          {text: `This includes flashing, blinking, scrolling, or auto-updating content.`},
          {text: `This only applies if said content starts automatically, lasts more than 5 seconds, and is displayed parallel with other content (i.e. not the sole content on the page).`}
        ]
      }
    ]
  },
  {
    name: 'No Flashing (1)',
    criteria: ['2.3.1'],
    encapsulatedBy: ['2.3.2'],
    intent: `This criteria protects photosensitive users, who may have a seizure if content flashes more than a few times.`,
    tasks: [
      {
        text: "Ensure that nothing ever flashes more than three times in one second.",
        subtasks: [
          {text: `There are some <em>very</em> technical exceptions. See the definition for General Flash and Red Flash Thresholds.`}
        ]
      },
    ],
    documents: [
      {text: 'Definition: General Flash and Red Flash Thresholds', href: 'https://www.w3.org/TR/WCAG21/#dfn-general-flash-and-red-flash-thresholds'}
    ]
  },
  {
    name: 'No Flashing (2)',
    criteria: ['2.3.2'],
    intent: `This criteria protects photosensitive users, who may have a seizure if content flashes more than a few times.`,
    tasks: [
      {
        text: "Ensure that nothing ever flashes more than three times in one second <em>without exception</em>.",
        subtasks: [
          {text: `Three shalt be the number thou shalt count, and the number of the counting shall be three.`},
          {text: `Four thou shalt not count.`},
          {text: `Five is right out.`}
        ]
      },
    ],
    related: ['2.3.1'],
    documents: [
      {text: 'Definition: General Flash and Red Flash Thresholds', href: 'https://www.w3.org/TR/WCAG21/#dfn-general-flash-and-red-flash-thresholds'}
    ]
  },
  {
    name: 'Skip to Content',
    criteria: ['2.4.1'],
    intent: `Because keyboard users don't have a cursor, they have to <code>TAB</code> through each element on a page. If there's a navigation bar, the user would have to tab through each link before getting to the main content of the page. This ensures they can skip right to the content.`,
    tasks: [
      {
        text: "Ensure there is a way for keyboard-only users to skip past the navigation bar and anything else, in order to get to the main content of the page.",
        subtasks: [
          {text: `For example, have a hidden anchor link labelled "Skip to main content" placed before the navigation bar in the DOM, to take the user straight to the content.`}
        ]
      },
    ]
  },
  {
    name: 'Page Titled',
    criteria: ['2.4.2'],
    intent: `This helps users of assistive technologies orient themselves on the site, especially when they have multiple tabs open. If we don't tell the user which page they're on, they may have to read the content to check, which adds far more friction for those with impaired vision.`,
    tasks: [
      {
        text: "Ensure there is a descriptive title for each page of the application that shows up in the tab.",
        subtasks: [
          {text: `This applies even to Single-Page Applications.`}
        ]
      },
    ]
  },
  {
    name: 'Meaningful Tab Sequence',
    criteria: ['2.4.3'],
    intent: `This helps users of assistive technologies orient themselves on the site, especially when they have multiple tabs open. If we don't tell the user which page they're on, they may have to read the content to check, which adds far more friction for those with impaired vision.`,
    tasks: [
      {
        text: "Ensure the tab order makes sense, helps the user build an appropriate mental model of complex UI, and doesn't switch between different elements or tasks.",
        subtasks: [
          {text: `One of the examples given is a site with a form and a sidebar. If pressing <code>TAB</code> skips back and forth between the form and the sidebar, that may technically match the reading order, but doesn't reflect how sighted users actually navigate the page. The user would want to stay on the form, and only navigate to the sidebar when needed.`}
        ]
      },
    ],
    related: ['1.3.2']
  },
  {
    name: 'Clarify Purpose of Links',
    criteria: ['2.4.4'],
    intent: `Users of assistive technologies may use a rotor that lists all available links on the page. Therefore, each link should have a descriptive label to help those users find what links they want to use.`,
    tasks: [
      {
        text: "Ensure links have a descriptive label, either in the copy of the link itself or in an associated label.",
        subtasks: [
          {text: `This should communicate the purpose of the link and the content of whatever it links to.`},
          {text: `Following 2.4.2 (Page Titled), labelling a link with the title of the page it navigates to should be sufficient.`}
        ]
      },
    ]
  },
  {
    name: 'Visible Focus',
    criteria: ['2.4.7'],
    intent: `Because keyboard users don't have a cursor, this is how they track where they are on the page.`,
    tasks: [
      {
        text: "Ensure there is a clear and visible focus state for any and all interactive elements.",
        subtasks: [
          {text: `All buttons should have a bright and obvious outline on focus. All links should have an underline or "glow"`},
          {text: `Clicks also trigger the focus state. This will result in said outline appearing on buttons/links after you click them. However, <i>please don't let this stop you from making the focus state as bright, bold, and visible as possible</i>. De-emphasizing the focus state for aesthetic purposes will severely damage the experience for keyboard users.`}
        ]
      },
    ]
  },
  {
    name: 'No Tiny Buttons',
    criteria: ['2.5.5'],
    intent: `This is already best practice for mobile UX, but it's also important for users with impaired mobility, who may lack precision with a cursor.`,
    tasks: [
      {
        text: `Ensure the target area of all buttons (i.e. the area that actually receives clicks) is at least 44x44 pixels in size.`,
        subtasks: [{text: `Note that the target area doesn't have to match the graphic. A 'ghost button' with a small icon is acceptable so long as the target area is 44x44. For example, the buttons to expand and collapse tasks in this app use this technique.`}]
      }
    ]
  },
  {
    name: 'High School Reading Level',
    criteria: ['3.1.5'],
    intent: `This is just good UX, but it's especially important for users with cognitive disabilities.`,
    tasks: [
      {
        text: `Ensure all content is written as clearly and simply as possible, and is below a high school reading level.`,
        subtasks: [
          {text: `If necessary, you can provide users with a separate version that passes this criteria.`}
        ]
      }
    ]
  },
  {
    name: `Focus Doesn't Trigger Major Change`,
    criteria: ['3.2.1'],
    intent: `Not all users can use a mouse, be it due to visual or movement impairment. Keyboard-only users rely on using <code>TAB</code> to change focus and navigate through the site, which you can try in this application. If simply navigating causes a modal to pop up, the user becomes disoriented, just like if a modal appeared as soon as you simply hovered over a button. Likewise, taking control of focus is equivalent to a site taking control of your mouse.`,
    tasks: [{
      text: `Ensure nothing changes the context of the page when it receives focus.`,
      subtasks: [
        {text: `"Change of context" is defined as changes to the user agent, viewport, focus, or any content that changes the meaning of the page.`},
        {text: `A tooltip appearing when a button receives focus does <b>not</b> violate this criteria, unless focus is moved to the tooltip automatically.`},
        {text: `A modal/lightbox popping up when a button receives focus <b>does</b> violate this criteria.`}
      ]
    }]
  },
  {
    name: 'Identify User Errors',
    criteria: ['3.3.1'],
    intent: `This is just good UX, but it's especially important for users with cognitive disabilities. Using <code>aria-live</code> is necessary for non-sighted users who otherwise won't see that an error has occurred.`,
    tasks: [
      {text: `Ensure that if there is a problem with user input (in a form, for example), it is identified and explained to the user through text.`},
      {text: `Ensure any text errors that appear are in an <code>aria-live</code> region, so that errors can be announced via screen reader.`}
    ]
  },
  {
    name: 'Suggest Corrections',
    criteria: ['3.3.3'],
    intent: `This is just good UX, but it's especially important for users with cognitive disabilities. Using <code>aria-live</code> is necessary for non-sighted users who otherwise won't see that an error has occurred.`,
    tasks: [
      {
        text: `Ensure that if there is a problem with user input (in a form, for example), there are suggestions for how to correct it, if possible.`,
        subtasks: [
          {text: `If the user is asked to type in a particular month, but the app only accepts the month by name, and the user writes '12', inform the user of the desired format (in this case, 'December').`},
          {text: `Exceptions are made if doing so jeopardizes security or functionality.`}
        ]
      },
      {text: `Ensure any text errors that appear are in an <code>aria-live</code> region, so that errors can be announced via screen reader.`}
    ]
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