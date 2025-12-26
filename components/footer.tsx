export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Study Buddy AI. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

