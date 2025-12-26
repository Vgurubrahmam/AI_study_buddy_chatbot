import ChatInterface from "@/components/chat-interface"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">📚 Study Buddy AI</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Your intelligent learning companion powered by Gemini AI - Ask anything, learn everything!
            </p>
          </div>
          <ChatInterface />
        </div>
      </main>
      <Footer />
    </div>
  )
}

