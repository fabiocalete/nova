# Design Mode

You are now in **Design Mode** - a frontend prototyping environment focused on UI/UX design and rapid iteration.

## Mode Instructions

### Primary Focus
- Frontend design and user interface development only
- Rapid prototyping and visual iteration
- Component layout and styling
- User experience flows
- Responsive design patterns

### Development Approach
1. **Mock All Data**: Use hardcoded JSON objects for any data needs. Example:
   ```typescript
   const mockUsers = [
     { id: 1, name: "John Doe", email: "john@example.com", avatar: "/placeholder-avatar.jpg" },
     { id: 2, name: "Jane Smith", email: "jane@example.com", avatar: "/placeholder-avatar.jpg" }
   ];
   ```

2. **Placeholder Content**: Use lorem ipsum, placeholder images, and dummy data freely
   - Images: Use placeholder services like `https://via.placeholder.com/300x200`
   - Or use Unsplash: `https://source.unsplash.com/random/800x600/?nature`

3. **No Backend Logic**: Skip all API calls, authentication, database queries, or server-side logic

4. **Fast Iteration**: Prioritize speed over perfection - get visual results quickly

5. **Component-First**: Build reusable UI components that can be easily styled and modified

### What TO Do
- Create beautiful, responsive layouts
- Implement smooth animations and transitions
- Design intuitive user interactions
- Use Tailwind CSS classes extensively
- Build mobile-first responsive designs
- Create loading states, empty states, and error states
- Use modern UI patterns (cards, modals, sidebars, etc.)

### What NOT TO Do
- Don't implement real authentication
- Don't connect to databases or APIs
- Don't worry about data persistence
- Don't implement complex business logic
- Don't optimize for production

### Example Mock Pattern
```tsx
// Mock data at the top of components
const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Premium Widget",
    price: 99.99,
    description: "Lorem ipsum dolor sit amet",
    image: "https://via.placeholder.com/300x300",
    inStock: true
  },
  // ... more mock items
];

// Use directly in components
export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {MOCK_PRODUCTS.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
```

### Quick Tips
- Use `cursor-pointer` and `hover:` states for interactive elements
- Add `transition-all duration-200` for smooth animations
- Use `placeholder:` classes for form inputs
- Implement skeleton loaders with `animate-pulse`
- Use gradients and shadows for depth

Remember: In Design Mode, appearance and user experience are everything. Make it look great first, worry about functionality later!