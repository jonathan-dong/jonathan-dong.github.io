// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Some things that I&#39;m working on.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-resume",
          title: "Resume",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "post-a-chicago-sunset",
        
          title: "A Chicago Sunset",
        
        description: "Chicago, IL",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/chi-sky/";
          
        },
      },{id: "post-what-comes-next",
        
          title: "What Comes Next?",
        
        description: "Chicago, IL",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/city-photography/";
          
        },
      },{id: "projects-link-trie",
          title: 'link-trie',
          description: "A Trie data structure designed for link paths.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/link-trie/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%61%64%6F%6E%67@%75%6D%69%63%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jonathan-dong", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jadong2001", "_blank");
        },
      },];
