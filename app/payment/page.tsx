"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, Mail, DollarSign, FileText, User, CheckCircle, AlertCircle } from "lucide-react"
import { useState } from "react"

function PaymentContent() {
  const searchParams = useSearchParams()
  const [copiedField, setCopiedField] = useState<string | null>(null)

  // Get parameters from URL
  const amount = searchParams.get("amount") || "0.00"
  const receiver = searchParams.get("receiver") || "etransfer@acbytes.com"
  const invoiceNumber = searchParams.get("invoice") || "INV-001"
  const description = searchParams.get("description") || "Automation Services"

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const formatAmount = (amount: string) => {
    const num = Number.parseFloat(amount)
    return isNaN(num)
      ? "$0.00"
      : `$${num.toLocaleString("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">
              Payment <span className="gradient-text">Instructions</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Please follow the instructions below to complete your payment via Interac e-Transfer
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Payment Details Card */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <DollarSign className="h-6 w-6 text-primary mr-2" />
                  Payment Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Amount */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Amount</label>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <span className="text-2xl font-bold text-primary">{formatAmount(amount)}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(amount, "amount")}
                      className="text-gray-400 hover:text-primary"
                    >
                      {copiedField === "amount" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                {/* Receiver Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Send e-Transfer to</label>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-primary mr-2" />
                      <span className="font-mono text-primary">{receiver}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(receiver, "receiver")}
                      className="text-gray-400 hover:text-primary"
                    >
                      {copiedField === "receiver" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                {/* Invoice Number */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Invoice Number</label>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 text-primary mr-2" />
                      <span className="font-mono">{invoiceNumber}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(invoiceNumber, "invoice")}
                      className="text-gray-400 hover:text-primary"
                    >
                      {copiedField === "invoice" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Description/Message</label>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <span className="text-gray-300">{description}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(description, "description")}
                      className="text-gray-400 hover:text-primary"
                    >
                      {copiedField === "description" ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Instructions Card */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <User className="h-6 w-6 text-primary mr-2" />
                  e-Transfer Instructions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-black font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Log into your online banking</h4>
                      <p className="text-gray-400 text-sm">Access your bank's online platform or mobile app</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-black font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Select Interac e-Transfer</h4>
                      <p className="text-gray-400 text-sm">Navigate to the e-Transfer or money transfer section</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-black font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Enter payment details</h4>
                      <p className="text-gray-400 text-sm">Use the exact amount and recipient email shown above</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-black font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">Add message</h4>
                      <p className="text-gray-400 text-sm">
                        Include the invoice number and description in the message field
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-black font-bold text-sm">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold">Send the transfer</h4>
                      <p className="text-gray-400 text-sm">Review and confirm the payment details before sending</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-primary">Important Notes</h4>
                      <ul className="text-sm text-gray-300 mt-2 space-y-1">
                        <li>• No security question required - we use auto-deposit</li>
                        <li>• Payment will be processed within 1-2 business days</li>
                        <li>• You'll receive a confirmation email once received</li>
                        <li>• Keep your e-Transfer confirmation for records</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Summary Card */}
          <Card className="bg-gray-900/50 border-gray-800 mt-8">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold">Payment Summary</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <Badge variant="outline" className="border-primary/50 text-primary px-4 py-2">
                    Amount: {formatAmount(amount)}
                  </Badge>
                  <Badge variant="outline" className="border-primary/50 text-primary px-4 py-2">
                    Invoice: {invoiceNumber}
                  </Badge>
                  <Badge variant="outline" className="border-primary/50 text-primary px-4 py-2">
                    Method: Interac e-Transfer
                  </Badge>
                </div>
                <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                  If you have any questions about this payment or need assistance, please contact us at{" "}
                  <a href="mailto:admin@acbytes.com" className="text-primary hover:underline">
                    admin@acbytes.com
                  </a>{" "}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default function PaymentPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-400">Loading payment details...</p>
          </div>
        </div>
      }
    >
      <PaymentContent />
    </Suspense>
  )
}
