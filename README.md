# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Contact Form Setup (EmailJS)

The contact form uses EmailJS to send emails directly to your inbox. To set it up:

1. **Sign up for EmailJS** (free account available):
   - Visit https://www.emailjs.com/
   - Create an account and verify your email

2. **Create an Email Service**:
   - Go to "Email Services" in the dashboard
   - Add a new service (Gmail, Outlook, SMTP, etc.)
   - **For Gmail**: 
     - Click "Connect Account" and authorize with your Google account
     - **IMPORTANT**: Make sure to grant ALL requested permissions (especially "Send email" scope)
     - If you get a 412 error, go to Settings > Re-authenticate and grant all permissions
   - **For Outlook**: Similar process, authorize with Microsoft account
   - **For SMTP**: Enter your SMTP server details (more reliable, recommended)
   - Copy your **Service ID**
   - **Note**: If Gmail gives authentication errors (412), consider using Outlook or SMTP instead

3. **Create Email Templates**:

   **Option A: Send to Both Recipients Using CC (Simplest)**
   
   - Go to "Email Templates"
   - Create a new template
   - **REQUIRED template variables** (must include these):
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{subject}}` - Email subject
     - `{{message}}` - Message content
   - **OPTIONAL template variables** (only include if you want them):
     - `{{company}}` - Company name
     - `{{tags}}` - Selected tags
   - **Set "To Email" field**: `noriakinishida38@gmail.com` (YOUR email address)
   - **Set "CC" field**: `{{from_email}}` (sender's email - they'll receive a copy)
   - Set "Reply To" to: `{{from_email}}` (this allows you to reply directly to the sender)
   - **Email Subject**: Use `{{subject}}` or a fixed subject like "New Contact Form Submission"
   - **Email Content**: Example template:
     ```
     New message from {{from_name}} ({{from_email}})
     
     Subject: {{subject}}
     
     {{message}}
     
     Company: {{company}}
     Tags: {{tags}}
     ```
   - Copy your **Template ID**

   **Option B: Send Two Separate Emails (More Control)**
   
   - Create **Template 1** (Form Submission - to you):
     - "To Email": `noriakinishida38@gmail.com`
     - "Reply To": `{{from_email}}`
     - Use the same variables as Option A
     - Copy this **Template ID** → Use as `VITE_EMAILJS_TEMPLATE_ID`
   
   - Create **Template 2** (Confirmation - to sender):
     - "To Email": `{{from_email}}` (sender's email)
     - "Reply To": `noriakinishida38@gmail.com` (your email)
     - Subject: "Thank you for contacting me" or similar
     - Content: Confirmation message like:
       ```
       Hi {{to_name}},
       
       Thank you for reaching out! I've received your message and will get back to you soon.
       
       Best regards,
       [Your Name]
       ```
     - Variables: `{{to_name}}`, `{{to_email}}`, `{{subject}}`
     - Copy this **Template ID** → Use as `VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID`
   
   - Add to your `.env` file:
     ```
     VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID=your_confirmation_template_id_here
     ```

   **Important**: 
   - Only use the variables listed above. Adding extra variables that aren't sent will cause a 422 error.
   - For Option A, both you and the sender will receive the same email (with CC).
   - For Option B, you receive the form submission and the sender receives a confirmation.

4. **Get your Public Key**:
   - Go to "Account" > "General"
   - Copy your **Public Key**

5. **Create `.env` file**:
   - Create a `.env` file in the root directory
   - Add these variables:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id_here
     VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
     VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
     ```

6. **Restart your dev server**:
   ```sh
   npm run dev
   ```

**Note**: If EmailJS is not configured, the form will fall back to opening your default email client with a pre-filled message.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
