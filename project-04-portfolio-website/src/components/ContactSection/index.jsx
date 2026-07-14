const labelClass = [
  "block",                 // Display as block element
  "mb-2",                  // Space below the label
  "text-sm",               // Small font size
  "font-medium",           // Medium font weight
  "text-gray-800",         // Text color (light mode)
  "dark:text-gray-200",    // Text color (dark mode)
].join(" ");

const inputClass = [
  "w-full",                // Take up full width
  "px-4",                  // Horizontal padding
  "py-2",                  // Vertical padding
  "border",                // Default border
  "rounded-lg",            // Rounded corners
  "bg-white",              // Background (light mode)
  "dark:bg-gray-800",      // Background (dark mode)
  "border-gray-300",       // Border color (light mode)
  "dark:border-gray-700",  // Border color (dark mode)
  "text-gray-800",         // Text color (light mode)
  "dark:text-white",       // Text color (dark mode)
  "placeholder:text-gray-400",      // Placeholder color (light mode)
  "dark:placeholder:text-gray-500", // Placeholder color (dark mode)
  "transition",            // Smooth transitions
  "duration-200",          // Transition duration
  "focus:outline-none",    // Remove default outline
  "focus:ring-2",          // Add focus ring
  "focus:ring-blue-500",   // Focus ring color
  "focus:border-blue-500", // Match border color on focus
].join(" ");

const ContactSection = () => {
    return (
        <section className="min-h-screen py-20 px-4 text-center bg-white dark:bg-gray-900">
            <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-12">
                Contact Me
            </h3>
            <div className="mb-10 text-gray-700 dark:text-gray-300">
                <p className="text-lg"> 📞 +233 (0) 50-384-8241 </p>
                <p className="text-lg"> cl.sampebgo@gmail.com </p>
            </div>
            <form className="max-w-3xl text-left mx-auto grid grid-cols-1 gap-6">
                <div>
                    <label htmlFor="name" className={labelClass}>
                        Name
                    </label>
                    <input 
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className={inputClass}
                    />
                </div>
                <div>
                    <label htmlFor="email" className={labelClass}>
                        Email
                    </label>
                    <input 
                        id="email"
                        type="text"
                        placeholder="Your email"
                        className={inputClass}
                    />
                </div>
                <div>
                    <label htmlFor="message" className={labelClass}>
                        Message
                    </label>
                    <textarea 
                        id="message"
                        rows={5}
                        placeholder="Your message ..."
                        className={inputClass}
                    />
                </div>
                <button
                    type="submit"
                    className={[
                        "w-full", "sm:w-fit", "cursor-pointer", 
                        "px-6", "py-2", "border", 
                        "border-blue-500", "text-blue-500",
                        "rounded", "hover:bg-blue-500",
                        "hover:text-white", "transition",
                    ].join(" ")}
                >
                    Send Message
                </button>
            </form>
        </section>
    )
}

export default ContactSection;