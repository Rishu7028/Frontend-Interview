export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700">
                <span className="text-sm font-bold text-white">M</span>
              </div>
              <span className="font-bold text-white">CA MONK</span>
            </div>
            <p className="text-sm text-gray-400">
              Empowering the next generation of financial leaders with tools, community, and knowledge.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Webinars</a></li>
              <li><a href="#" className="hover:text-white">Case Studies</a></li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Job Board</a></li>
              <li><a href="#" className="hover:text-white">Practice Tests</a></li>
              <li><a href="#" className="hover:text-white">Mentorship</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-gray-500">
              © 2024 CA Monk. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
