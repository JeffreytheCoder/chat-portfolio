import { createChatBotMessage } from 'react-chatbot-kit';
import Options from '../../components/molecules/Options';
import ExperienceCards from '../../components/organisms/ExperienceCards';
import ProjectCards from '../../components/organisms/ProjectCards';
import SkillCards from '../../components/organisms/SkillCards';
import BlogCards from '../../components/organisms/BlogCards';

const getMoodOptions = (actionProvider) => {
  return [
    {
      text: 'Doing great! Tell me about yourself',
      handler: () => actionProvider.handleGoodMood(),
      id: 1,
    },
    {
      text: 'Having a bad day...',
      handler: () => actionProvider.handleBadMood(),
      id: 2,
    },
  ];
};

const getJokeOptions = (actionProvider) => {
  return [
    {
      text: "LOL that's funny",
      handler: () => actionProvider.handleGoodMoodFinally(),
      id: 1,
    },
    {
      text: 'Tell me another one',
      handler: () => actionProvider.handleBadMoodAgain(),
      id: 2,
    },
  ];
};

const getPersonalOptions = (actionProvider) => {
  return [
    {
      text: 'Experience',
      handler: () => actionProvider.handleExperience(),
      id: 1,
    },
    {
      text: 'Projects',
      handler: () => actionProvider.handleProjects(),
      id: 2,
    },
    {
      text: 'Skills',
      handler: () => actionProvider.handleSkills(),
      id: 3,
    },
    {
      text: 'Blogs',
      handler: () => actionProvider.handleBlogs(),
      id: 4,
    },
  ];
};

const config = {
  botName: 'Jeffrey Yu',
  initialMessages: [
    createChatBotMessage(
      "Hi, I'm Jeffrey. Nice to meet you! I How are you doing today?",
      {
        widget: 'moodOptions',
      }
    ),
  ],
  // customStyles: {
  //   botMessageBox: {
  //     backgroundColor: '#147efb',
  //   },
  //   chatButton: {
  //     backgroundColor: '#147efb',
  //   },
  // },
  widgets: [
    {
      widgetName: 'moodOptions',
      widgetFunc: ({ actionProvider }) => (
        <Options actionProvider={actionProvider} getOptions={getMoodOptions} />
      ),
    },
    {
      widgetName: 'jokeOptions',
      widgetFunc: ({ actionProvider }) => (
        <Options actionProvider={actionProvider} getOptions={getJokeOptions} />
      ),
    },
    {
      widgetName: 'personalOptions',
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getPersonalOptions}
        />
      ),
    },
    {
      widgetName: 'experienceOptions',
      widgetFunc: () => <ExperienceCards />,
    },
    {
      widgetName: 'projectsOptions',
      widgetFunc: () => <ProjectCards />,
    },
    {
      widgetName: 'skillsOptions',
      widgetFunc: () => <SkillCards />,
    },
    {
      widgetName: 'blogsOptions',
      widgetFunc: () => <BlogCards />,
    },
  ],
};

export default config;
