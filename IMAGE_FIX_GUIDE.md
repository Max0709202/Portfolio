# Image Path Fix Guide for Vercel Deployment

## Problem
Images weren't displaying after deploying to Vercel because they were referenced incorrectly.

## Solution
All images have been moved to the `public/` folder and paths have been updated.

## Changes Made

### 1. Moved Images to Public Folder
- ✅ `avatar.png` → `public/avatar.png`
- ✅ Project images → `public/images/projects/`
- ✅ Client images → `public/images/clients/`

### 2. Updated Image References

#### Hero Component (`src/components/sections/Hero.tsx`)
- ✅ Changed: `/avatar.png` (already correct, just moved file)

#### Projects Component (`src/components/sections/Projects.tsx`)
- ✅ Changed from: `/src/images/projects/...`
- ✅ Changed to: `/images/projects/...`

#### Certifications Component (`src/components/sections/Certifications.tsx`)
- ✅ Changed from: `src/images/clients/...`
- ✅ Changed to: `/images/clients/...`

#### Navbar Component (`src/components/layout/Navbar.tsx`)
- ✅ Logo is correctly imported: `import logo from "@/images/logo.png"` (this works because it's imported as a module)

## How Vite Handles Images

### Images in `public/` folder:
- Can be referenced with `/` paths
- Example: `/avatar.png`, `/images/projects/ecommerce.png`
- These are served as static assets

### Images in `src/` folder:
- Must be imported as modules
- Example: `import logo from "@/images/logo.png"`
- Vite processes these during build

## File Structure After Fix

```
public/
  ├── avatar.png
  ├── images/
  │   ├── projects/
  │   │   ├── ecommerce.png
  │   │   ├── healthcare.jpg
  │   │   ├── real-estate.jpg
  │   │   └── task management.jpg
  │   └── clients/
  │       ├── Jorge.jpg
  │       ├── Jose.jpg
  │       ├── Juan.jpg
  │       ├── Lucas.jpg
  │       ├── lucia.jpg
  │       └── Pablo.jpg
  └── ...

src/
  └── images/
      └── logo.png (imported as module)
```

## Next Steps

1. **Commit and Push Changes**
   ```bash
   git add .
   git commit -m "Fix image paths for Vercel deployment"
   git push
   ```

2. **Vercel will automatically redeploy** with the new image paths

3. **Verify Images**
   - Check that all images display correctly
   - Test on different devices/browsers
   - Verify image loading performance

## Important Notes

- ✅ All images are now in `public/` folder (except logo which is imported)
- ✅ All paths use `/` prefix for public assets
- ✅ Logo import works correctly (Vite processes it)
- ⚠️ If you add new images, place them in `public/images/` and reference with `/images/...`

## Troubleshooting

If images still don't display:

1. **Check file names** - Ensure case sensitivity matches (especially on Linux servers)
2. **Clear browser cache** - Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
3. **Check Vercel build logs** - Ensure images are being copied to build output
4. **Verify paths** - Check browser console for 404 errors
5. **Check file extensions** - Ensure extensions match exactly (.jpg vs .jpeg)

## Case Sensitivity Note

The file `lucia.jpg` is lowercase in the filesystem. The code references it as `/images/clients/lucia.jpg` (lowercase) which should work, but if it doesn't, you may need to rename the file to match exactly or update the reference.
