# Pet Adoption Website

Welcome to the Pet Adoption website project! This platform is designed to facilitate the adoption of pets by connecting potential adopters with available animals. The website includes features for browsing and searching for pets, detailed pet profiles, user account management, and administrative tools for managing pet listings and user accounts.

## Live URL

### https://pet-adoption-client-three.vercel.app

[Insert your live URL here]

## Login Credentials:

- Admin:
  email: admin@gmail.com
  password: admin111
- User-1 :
  email: shemol@gmail.com
  password: user12345
- User-2 :
  email: mousen@gamil.com
  password: user12345

## Project Features

### 1. Home Page/Landing Page

- Navigation :

  - Home
  - About Us
  - Login/Register (if not logged in)
  - My Profile (if logged in)
  - Hover on My Profile show Profile and change password
  - If user Admin Show Dashboard

- **Home** :-
- Pet Cards: Display a list of pets available for adoption in card format. Each card includes: Pet's name, Photo, Brief description, and Link to the full pet details page
- if user not sign in user cant see details pet page
- user can search pet by name, species, breed and location
- in details page user can see pets details information and make a request for adoption

### 2. Login & Registration

#### Login:

- email address
- Password

#### Registration Form

- Username
- name
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

- show user account information with image
- user can update profile information

- **5.1 My Adopted Pets**:
- if user role is user, user can see his/her adopted pets in his/her profile
- if user role is admin, admin can see adoption requests make by users

- **Change Password**:
- user can change password with current password and new password

### 6. Admin Dashboard

- Admin Can access admin dashboard
- Admin Can Manage User
- Admin can make user status activate or deactivate
- Admin can make user to admin or admin to normal user
- Admin Can create new pet
- Admin can delete pet
- Admin can update pet information
- Admin can access pet adoption requests to his/her profile and accept them or Reject them

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

1. Clone the repository: git clone https://github.com/moyuriakther/pet-adoption-client.git
2. Go to the Project file: cd pet-adoption-client
3. Install Dependency: npm install
4. Run Project Locally: npm run dev
