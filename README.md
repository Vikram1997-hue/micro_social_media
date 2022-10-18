# micro_social_media

An example of a typical social media platform, built entirely in JavaScript. Basic overview includes -
1. 2 types of users - Regular User (USER) and Admin (ADMIN).
2. Both types of users have Sign In, Sign Out, and Sign Up capabilities (featuring JWT authentication with a 10 minute expiration time, following which there is automatic Sign Out). PS - Redis has been used for caching and session management
3. USER's can create posts
4. As soon as a USER creates a post, its default status is 'Verification Pending'. Upon review + approval from ADMIN, post becomes Approved and can now be seen by all USER's on the platform (posts with pending verification can only be seen by the USER who made them)
5. Upon review, ADMIN may decide that a post made by a certain USER violates Community Guidelines and may therefore choose to delete said post (soft delete)
6. USER's can chat with each other (text, audio call, video call)


  
  
  
  
Tech stack: 

Backend - Express + NodeJS + MongoDB + Redis  
DevOps - AWS  

Deployed @ ____________ (coming soon)
