export interface BlogPost {
  id: string | number;
  title: string;
  category: string[];
  description: string;
  date: string;
  coverImage: string;
  content: string;
  author?: string;
  authorTitle?: string;
}

export interface CreateBlogPayload {
  title: string;
  category: string[];
  description: string;
  date: string;
  coverImage: string;
  content: string;
}
import dbJson from "../../db.json";
// Mock blog data
const mockBlogs: BlogPost[] = dbJson.blogs;

// [
//   {
//     id: 1,
//     title: 'Future of Fintech',
//     category: ['FINANCE', 'Featured'],
//     description: 'Exploring how AI and blockchain are reshaping financial services and what it means for future...',
//     date: '2024-10-22',
//     coverImage: '/blog-cover.jpg',
//     content: `The intersection of finance and technology has never been more vibrant. As we look towards 2024, the role of the Chartered Accountant is evolving from mere bookkeeping to strategic financial analysis powered by AI.

// The Rise of Automated Accounting
// Automation is no longer a buzzword, it's a reality. Routine tasks like data entry, reconciliation, and payroll processing are being automated at an unprecedented pace. This shift allows finance professionals to focus on high-value activities such as:

// • Strategic financial planning and analysis (FPA&A).
// • Risk management and compliance auditing.
// • Advisory services for business growth and sustainability.

// Blockchain: Beyond Cryptocurrency
// While Bitcoin grabs the headlines, the underlying technology—blockchain—is quietly revolutionizing auditing. The immutable ledger provides a "single source of truth" that could potentially eliminate the need for sampling in audits, allowing for 100% verification of transactions.

// Preparing for the Shift
// To stay relevant, CAs must upskill. Understanding Python for data analysis, mastering visualization tools like PowerBI, and getting comfortable with AI-driven ERP systems are now essential skills. The traditional syllabus provides the foundation, but continuous learning builds the career.`,
//     author: 'Arjun Mehta',
//     authorTitle: 'Senior Financial Analyst',
//   },
//   {
//     id: 2,
//     title: 'Ace Your CA Finals',
//     category: ['CAREER', 'Study Tips'],
//     description: 'Strategies and study plans to help you clear your exams in the first attempt without burning out...',
//     date: '2024-10-20',
//     coverImage: '/blog-cover.jpg',
//     content: `Preparing for CA Finals is one of the most challenging phases in a CA student's journey. Here are proven strategies to ace your exams without burning out.

// Creating a Structured Study Plan
// Start by breaking down the vast syllabus into manageable chunks. Allocate time proportionally to the weight of each subject in the exam. Dedicate the first 3 months to concept building, the next 2 months to practice, and the final month to revision.

// Mock Tests: Your Best Friend
// Attempting multiple mock tests is crucial. Mock tests familiarize you with the exam pattern, help manage time effectively, and build confidence. Aim to solve at least 10-15 mock papers before the final exam.

// Balancing Theory and Practice
// While concept clarity is important, application is key. For every theory topic, ensure you solve practice problems. This dual approach ensures you're not just memorizing but understanding.`,
//     author: 'Priya Sharma',
//     authorTitle: 'CA Educator',
//   },
//   {
//     id: 3,
//     title: 'Understanding Tax Reforms',
//     category: ['REGULATIONS', 'Taxation'],
//     description: 'A comprehensive breakdown of the new tax laws introduced this fiscal year and their impact on...',
//     date: '2024-10-18',
//     coverImage: '/blog-cover.jpg',
//     content: `Tax laws are constantly evolving. This year brought several significant changes that every CA should understand.

// Key Changes in Direct Taxation
// The government has introduced new provisions aimed at simplifying tax compliance and promoting digital transactions. These include changes in deduction limits, new categories for income classification, and enhanced incentives for digital payments.

// Impact on Individuals and Businesses
// While individuals enjoy certain tax benefits from these reforms, small businesses need to reassess their tax planning strategies. The expanded scope of beneficial provisions means both challenges and opportunities for tax professionals.

// Staying Updated
// As a CA, staying abreast of tax changes is essential. Regular training, attending seminars, and consulting professional bodies ensure you're always providing the latest advice to clients.`,
//     author: 'Vikram Desai',
//     authorTitle: 'Tax Consultant',
//   },
//   {
//     id: 4,
//     title: 'Soft Skills for Auditors',
//     category: ['SKILLS', 'Development'],
//     description: 'Why technical knowledge isn\'t enough: Mastering communication and negotiation in your audits...',
//     date: '2024-10-15',
//     coverImage: '/blog-cover.jpg',
//     content: `In today's professional environment, soft skills are just as important as technical expertise. For auditors, effective communication can make the difference between a successful audit and a problematic one.

// The Power of Communication
// Clear communication ensures that your audit findings are understood and acted upon. Whether presenting to the audit committee or discussing with management, articulate your points professionally and empathetically.

// Negotiation and Conflict Resolution
// Disagreements over audit adjustments are common. Rather than being confrontational, approach these situations as problem-solving opportunities. Understanding the client's perspective while firmly standing by auditing standards is crucial.

// Building Trust
// An auditor who is approachable, listens actively, and demonstrates genuine interest in the client's business builds stronger relationships. This trust often leads to more effective audits and better long-term partnerships.`,
//     author: 'Nisha Kumar',
//     authorTitle: 'Audit Manager',
//   },
//   {
//     id: 5,
//     title: 'Audit Automation Tools',
//     category: ['TECHNOLOGY', 'Automation'],
//     description: 'Exploring the latest software tools that are revolutionizing the way audits are conducted...',
//     date: '2024-10-12',
//     coverImage: '/blog-cover.jpg',
//     content: `The audit profession is undergoing significant transformation thanks to technological advancement. Audit automation tools are not just making audits faster; they're making them smarter.

// Data Analytics in Auditing
// Modern audit tools can analyze entire datasets instead of samples. This gives auditors a complete picture of transactions, making audits more thorough and reliable. Tools like Python-based analytics and specialized audit software are becoming industry standards.

// AI-Powered Risk Assessment
// Artificial Intelligence is being leveraged to identify high-risk areas within an organization. By learning from historical data, these systems can predict where issues are likely to occur, allowing auditors to focus their efforts more effectively.

// The Human Touch Still Matters
// While technology automates routine tasks, the human auditor's judgment remains invaluable. The future of auditing is not about replacing auditors but enhancing their capabilities.`,
//     author: 'Rajesh Patel',
//     authorTitle: 'Technology Lead',
//   },
// ];

export const apiClient = {
  async getBlogs(): Promise<BlogPost[]> {
    // Simulate network delay
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockBlogs), 300);
    });
  },

  async getBlogById(id: number): Promise<BlogPost> {
  // Simulate network delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const blog = mockBlogs.find(b => Number(b.id) === id);
      if (blog) {
        resolve(blog);
      } else {
        reject(new Error('Blog not found'));
      }
    }, 300);
  });
},

  async createBlog(payload: CreateBlogPayload): Promise<BlogPost> {
    const newBlog: BlogPost = {
      ...payload,
      id: mockBlogs.length + 1,
      author: 'New Author',
      authorTitle: 'Contributor',
    };
    mockBlogs.unshift(newBlog);
    return new Promise((resolve) => {
      setTimeout(() => resolve(newBlog), 300);
    });
  },
};
