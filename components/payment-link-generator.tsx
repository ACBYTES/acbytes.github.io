"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Copy, ExternalLink } from "lucide-react"

export function PaymentLinkGenerator() {
  const [amount, setAmount] = useState("1500.00")
  const [receiver, setReceiver] = useState("payments@autoflow.com")
  const [invoice, setInvoice] = useState("INV-2024-001")
  const [description, setDescription] = useState("Automation Services - Growth Package")
  const [generatedLink, setGeneratedLink] = useState("")

  const generateLink = () => {
    const baseUrl = window.location.origin
    const params = new URLSearchParams({
      amount,
      receiver,
      invoice,
      description,
    })
    const link = `${baseUrl}/payment?${params.toString()}`
    setGeneratedLink(link)
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(generatedLink)
      alert("Link copied to clipboard!")
    } catch (err) {
      console.error("Failed to copy link: ", err)
    }
  }

  return (
    <Card className="bg-gray-900/50 border-gray-800 max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Payment Link Generator (Testing)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="1500.00"
              className="bg-gray-800 border-gray-700"
            />
          </div>
          <div>
            <Label htmlFor="receiver">Receiver Email</Label>
            <Input
              id="receiver"
              value={receiver}
              onChange={(e) => setReceiver(e.target.value)}
              placeholder="payments@autoflow.com"
              className="bg-gray-800 border-gray-700"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="invoice">Invoice Number</Label>
          <Input
            id="invoice"
            value={invoice}
            onChange={(e) => setInvoice(e.target.value)}
            placeholder="INV-2024-001"
            className="bg-gray-800 border-gray-700"
          />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Automation Services - Growth Package"
            className="bg-gray-800 border-gray-700"
          />
        </div>

        <Button onClick={generateLink} className="w-full bg-primary hover:bg-primary/90 text-black">
          Generate Payment Link
        </Button>

        {generatedLink && (
          <div className="space-y-2">
            <Label>Generated Link:</Label>
            <div className="flex items-center space-x-2">
              <Input value={generatedLink} readOnly className="bg-gray-800 border-gray-700 font-mono text-xs" />
              <Button variant="outline" size="icon" onClick={copyLink}>
                <Copy className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => window.open(generatedLink, "_blank")}>
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
