import { Field } from "@clerk/elements/common";
import { TEMPLATES } from "../dashboard/_components/TemplatelistSection";

export const Templates: TEMPLATES[] = [
  {
    // Instagram Post Generator
    name: "Instagram Post Generator",
    desc: "An AI tool that generates creative Instagram post ideas based on a topic.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/733/733558.png",
    aiPrompt:
      "Generate 5 Instagram post ideas with hashtags based on the provided topic or keywords.",
    slug: "instagram-post-generator",
    form: [
      {
        label: "Enter your Instagram post topic or keywords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter a brief outline for the post",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Title",
    desc: "Generate AI-powered blog titles",
    category: "Blog",
    slug: "generate-blog-title",
    aiPrompt: "Generate a blog title based on the given keywords",
    icon: "https://cdn-icons-png.flaticon.com/512/6114/6114045.png", // Make sure the icon is a valid URL
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  // LinkedIn Post Generator
  {
    name: "LinkedIn Post Generator",
    desc: "An AI tool that generates professional LinkedIn posts based on the provided topic.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/3536/3536505.png",
    aiPrompt: "Generate 5 LinkedIn post ideas based on the provided topic.",
    slug: "linkedin-post-generator",
    form: [
      {
        label: "Enter your LinkedIn post topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter additional details or keywords",
        field: "textarea",
        name: "details",
      },
    ],
  },
  {
    name: "YouTube Description",
    desc: "An AI tool that generates YouTube video descriptions with emojis.",
    category: "YouTube Tools",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_(2013-2017).svg/2560px-YouTube_Logo_(2013-2017).svg.png",
    aiPrompt:
      "Generate a YouTube description with emojis, up to 4-5 sentences.",
    slug: "youtube-description",
    form: [
      {
        label: "Enter your video topic/title",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter YouTube outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },

  // Blog Content Generator

  {
    name: "Facebook Ad Generator",
    desc: "An AI tool that generates Facebook ad copy based on product and target audience.",
    category: "Advertising",
    icon: "https://cdn-icons-png.flaticon.com/128/124/124010.png",
    aiPrompt:
      "Generate a Facebook ad copy based on the provided product description and target audience.",
    slug: "facebook-ad-generator",
    form: [
      {
        label: "Enter your product description",
        field: "textarea",
        name: "productDescription",
        required: true,
      },
      {
        label: "Enter your target audience",
        field: "textarea",
        name: "audience",
      },
    ],
  },
  // YouTube Tags Generator
  {
    name: "YouTube Tags",
    desc: "An AI tool that generates YouTube tags based on video titles.",
    category: "YouTube Tools",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_(2013-2017).svg/2560px-YouTube_Logo_(2013-2017).svg.png",
    aiPrompt:
      "Generate 10 YouTube tags in bullet points based on the video title.",
    slug: "youtube-tags",
    form: [
      {
        label: "Enter your YouTube video title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter YouTube video outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Twitter Post Generator",
    desc: "An AI tool that generates creative Twitter posts based on a topic or keywords.",
    category: "Social Media",
    slug: "twitter-post-generator",
    aiPrompt:
      "Generate 5 Twitter post ideas based on the provided topic or keywords.",
    icon: "https://cdn-icons-png.flaticon.com/128/733/733579.png", // Make sure the icon is a valid URL
    form: [
      {
        label: "Enter your Twitter post topic or keywords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter any additional context or hashtags",
        field: "textarea",
        name: "context",
      },
    ],
  },
  {
    name: "Email Subject Line Generator",
    desc: "An AI tool that generates engaging email subject lines based on the provided topic or keywords.",
    category: "Email Marketing",
    slug: "email-subject-line-generator",
    aiPrompt:
      "Generate 5 compelling email subject lines based on the given topic or keywords.",
    icon: "https://cdn-icons-png.flaticon.com/128/1054/1054732.png", // Make sure the icon is a valid URL
    form: [
      {
        label: "Enter your email topic or keywords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter additional context or details",
        field: "textarea",
        name: "context",
      },
    ],
  },
  {
    name: "Resume Bullet Points Generator",
    desc: "An AI tool that generates impactful bullet points for resumes based on job responsibilities and achievements.",
    category: "Career",
    slug: "resume-bullet-points-generator",
    aiPrompt:
      "Generate impactful bullet points for a resume based on the provided job responsibilities and achievements.",
    icon: "https://cdn-icons-png.flaticon.com/128/747/747376.png",
    form: [
      {
        label: "Enter your job responsibilities",
        field: "textarea",
        name: "jobResponsibilities",
        required: true,
      },
      {
        label: "Enter your achievements",
        field: "textarea",
        name: "achievements",
      },
    ],
  },
  {
    name: "Book Title Generator",
    desc: "An AI tool that generates creative and engaging book titles based on the book's genre and themes.",
    category: "Publishing",
    slug: "book-title-generator",
    aiPrompt:
      "Generate creative and engaging book titles based on the provided genre and themes.",
    icon: "https://cdn-icons-png.flaticon.com/128/2092/2092686.png",
    form: [
      {
        label: "Enter the book's genre",
        field: "input",
        name: "genre",
        required: true,
      },
      {
        label: "Enter the book's themes or keywords",
        field: "textarea",
        name: "themes",
      },
    ],
  },
  {
    name: "Add Emojis to Text",
    desc: "An AI tool that adds emojis to the provided text to make it more engaging and expressive. 🌟✨",
    category: "Text Enhancement",
    slug: "add-emojis-to-text",
    aiPrompt:
      "Add relevant emojis to the provided text to make it more engaging and expressive. 🌟📈",
    icon: "https://cdn-icons-png.flaticon.com/128/747/747376.png",
    form: [
      {
        label: "Enter the text you want to enhance with emojis 📝",
        field: "textarea",
        name: "text",
        required: true,
      },
      {
        label: "Enter any specific emojis or themes to include 🎨",
        field: "textarea",
        name: "emojis",
      },
    ],
  },
  {
    name: "Instagram Hashtag Generator",
    desc: "An AI tool that generates relevant hashtags for your Instagram posts to increase visibility and engagement. 📈📸",
    category: "Social Media Tools",
    slug: "instagram-hashtag-generator",
    aiPrompt:
      "Generate relevant hashtags for the provided text to enhance engagement on Instagram. 🏷️✨",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111397.png",
    form: [
      {
        label: "Enter the text or theme for your Instagram post 📝",
        field: "textarea",
        name: "postText",
        required: true,
      },
      {
        label: "Enter any specific keywords or topics to include 🌟",
        field: "textarea",
        name: "keywords",
      },
    ],
  },
];
