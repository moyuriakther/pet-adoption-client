# Pet Adoption Website

Welcome to the Pet Adoption website project! This platform is designed to facilitate the adoption of pets by connecting potential adopters with available animals. The website includes features for browsing and searching for pets, detailed pet profiles, user account management, and administrative tools for managing pet listings and user accounts.

## Live URL

[Insert your live URL here]

## Project Features

### 1. Home Page/Landing Page

#### Header

- **Logo**: Prominently displayed website logo.
- **Navigation Bar**: Links to:
  - Home
  - About Us
  - Login/Register (if not logged in)
  - My Profile (if logged in)

#### Searching Options

- **Search Bar**: Allows users to search for pets by:
  - Pet type (e.g., dog, cat)
  - Breed
  - Age
  - Location
- **Sidebar**: Additional filtering options such as:
  - Size
  - Gender
  - Special needs

#### Pet Lists (Based on search)

- **Pet Cards**: Display a list of pets available for adoption in card format. Each card includes:
  - Pet's name
  - Photo
  - Brief description
  - Age
  - Breed
  - Location
  - Link to the full pet details page

#### Extra Sections (Optional)

- **Success Stories**: Testimonials from people who have adopted pets through the website.
- **Adoption Tips**: Advice and guidelines for adopting a pet.

#### Footer

- **Contact Information**: Email address, phone number, social media links.
- **Copyright Information**: Standard copyright details.
- **Additional Links**: Terms of Use, Privacy Policy, etc.

### 2. Login & Registration

#### Login Form

- **Fields**:
  - Username or email address
  - Password

#### Registration Form

- **Fields**:
  - Username
  - Email address
  - Password (with confirmation)

### 3. Pet Details Page (Private)

- **Pet Information**: Detailed information about the pet, including:
  - Multiple photos
  - Detailed description (temperament, special needs, etc.)
  - Age, breed, gender
  - Health status (vaccinated, spayed/neutered)
  - Current location
- **Adoption Request Button**: Button to initiate an adoption request (redirects to adoption request page).
- Accessible only to logged-in users.

### 4. Pet Adoption Request Page

- **Form Fields**:
  - User's contact information (prefilled from profile if possible)
  - Additional information
  - Agreement to terms and conditions
- **Submit Button**: Submit the adoption request.

### 5. My Profile

#### User Account Information

- **Edit Profile**: Options to edit username and email.
- **Change Password**: Link to Change Password section.

#### Subsections

- **5.1 My Adopted Pets**:
  - List of pets the user has adopted.
  - Details for each pet:
    - Pet's name
    - Photo
    - Adoption date
    - Link to the pet details page (if available)
- **5.2 Change Password Section**:
  - **Fields**:
    - Current password
    - New password (with confirmation)

### 6. Admin Dashboard

#### User Management

- **View and Manage User Accounts**: Activate/deactivate accounts, edit roles.

#### Pet Management

- **Add New Pets**: Only admins can add pets to the system.
  - **Form Fields**:
    - Pet's name
    - Photos
    - Detailed description
    - Age, breed, gender
    - Health status
    - Current location
- **Edit/Remove Pets**: Admins can edit or remove pet listings.

### 7. About Us Page

#### Content

- **Mission Statement**: Brief description of the website's purpose and mission.
- **Team Information**: Information about the team behind the website.
- **Contact Information**: Email address, phone number, social media links.

## Technology Stack

### Backend Development

- Node.js
- Express.js
- Prisma
- TypeScript

### Frontend Development

- Next.js
- Material Ui

## Setup Instructions

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd [repository-name]
   ```
