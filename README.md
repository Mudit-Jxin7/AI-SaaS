# Project Name: Visualvivo - AI Image SaaS Platform

## Introduction
Visualvivo is an AI-powered image processing Software as a Service (SaaS) platform designed to provide advanced image transformation capabilities coupled with seamless user experience. With a focus on security, efficiency, and user satisfaction, it integrates cutting-edge technologies to offer a comprehensive solution for image manipulation and enhancement.

![image](https://github.com/Mudit-Jxin7/AI-SaaS/assets/97677133/7ba56aa1-0e41-4eda-b2f1-9b6b147bbb94)
![image](https://github.com/Mudit-Jxin7/AI-SaaS/assets/97677133/e39bf593-50d8-4239-8981-38559f75afc4)


## Technologies Used
- Next.js
- TypeScript
- MongoDB
- Clerk
- Cloudinary
- Stripe
- Shadcn
- TailwindCSS

## Features
Explore the diverse range of features:

### Authentication and Authorization
Secure user access with robust authentication mechanisms, including registration, login, and route protection.

### Community Image Showcase
Discover user transformations showcased in a visually appealing manner with easy navigation facilitated by pagination.

### Advanced Image Search
Efficiently find images based on content or objects present within the image, ensuring quick and accurate results.

### Image Processing Capabilities
Imaginify offers a plethora of AI-driven image processing features:
- **Image Restoration**: Effortlessly revive old or damaged images to their former glory.
- **Image Recoloring**: Customize images by replacing objects with desired colors effortlessly.
- **Image Generative Fill**: Seamlessly fill in missing areas of images using generative techniques.
- **Object Removal**: Achieve precise cleanup of images by removing unwanted objects.
- **Background Removal**: Extract objects from backgrounds with ease, enabling seamless integration into various contexts.

### Download and Transformation Management
Users can conveniently download transformed images and manage transformations, including deletion and updates, ensuring complete control over their content.

### Credits System
Imaginify implements a credits system allowing users to earn or purchase credits for accessing image transformation features, providing flexibility and convenience.

### Profile Management and Credits Purchase
Users can access their transformed images and credit information through a personalized profile page. Secure credit purchases are facilitated via Stripe integration for uninterrupted use.

### Responsive UI/UX
Enjoy a seamless experience across devices with a user-friendly interface designed to enhance usability and accessibility.

## Getting Started
Follow these steps to set up Imaginify on your local machine:

### Prerequisites
Ensure the following software is installed:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Cloning the Repository
Clone the Imaginify repository:
```bash
git clone git@github.com:Mudit-Jxin7/AI-SaaS.git
cd AI-SaaS
```

### Installation
Install project dependencies using npm:
```bash
npm install
```

### Set Up Environment Variables
Create a `.env.local` file in the project root and add the following environment variables:
```env
#NEXT
NEXT_PUBLIC_SERVER_URL=

#MONGODB
MONGODB_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#CLOUDINARY
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

#STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```
Replace the placeholder values with your actual credentials obtained from respective service providers.

### Running the Project
Start the development server:
```bash
npm run dev
```
Access Imaginify by opening [http://localhost:3000](http://localhost:3000) in your web browser.

## Contribution
Contributions to Imaginify are welcome! Feel free to submit bug reports, feature requests, or pull requests to help improve the platform.

---
