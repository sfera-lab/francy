import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Avatar,
  AvatarFallback,
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Checkbox,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  FormField,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Spinner,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Textarea,
  Toaster,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  toast,
} from "ui-engine";

export function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [progress, setProgress] = useState(40);

  return (
    <TooltipProvider>
      <div className="playground" data-theme={theme}>
        <div className="playground-topbar">
          <h1>ui-engine playground</h1>
          <Button
            variant="outline"
            onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
          >
            Toggle {theme === "light" ? "dark" : "light"} theme
          </Button>
        </div>

        <section className="playground-section">
          <h2>Buttons</h2>
          <div className="playground-row">
            <Button variant="solid">Solid</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
          </div>
        </section>

        <section className="playground-section">
          <h2>Form primitives</h2>
          <div className="playground-row">
            <FormField label="Email" hint="We'll never share it.">
              <Input placeholder="you@example.com" />
            </FormField>
            <FormField label="Bio">
              <Textarea placeholder="Tell us about yourself" />
            </FormField>
          </div>
          <div className="playground-row">
            <Checkbox aria-label="Accept terms" />
            <RadioGroup defaultValue="basic" aria-label="Plan">
              <div className="playground-row">
                <RadioGroupItem value="basic" aria-label="Basic" />
                <RadioGroupItem value="pro" aria-label="Pro" />
              </div>
            </RadioGroup>
            <Switch aria-label="Notifications" />
            <Select defaultValue="apple">
              <SelectTrigger aria-label="Fruit" style={{ width: 160 }}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="cherry">Cherry</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        <section className="playground-section">
          <h2>Overlays</h2>
          <div className="playground-row">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Delete item</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="danger">Delete</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">Open drawer</Button>
              </DrawerTrigger>
              <DrawerContent side="right">
                <DrawerTitle>Filters</DrawerTitle>
              </DrawerContent>
            </Drawer>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Open popover</Button>
              </PopoverTrigger>
              <PopoverContent>Popover content goes here.</PopoverContent>
            </Popover>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Actions</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Rename</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>A helpful tooltip</TooltipContent>
            </Tooltip>

            <Button
              variant="outline"
              onClick={() =>
                toast({ title: "Saved", description: "Your changes were saved." })
              }
            >
              Fire toast
            </Button>
          </div>
        </section>

        <section className="playground-section">
          <h2>Tabs & accordion</h2>
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Account settings panel.</TabsContent>
            <TabsContent value="billing">Billing settings panel.</TabsContent>
          </Tabs>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is ui-engine?</AccordionTrigger>
              <AccordionContent>
                A generic React component library built on Radix primitives.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="playground-section">
          <h2>Feedback & data</h2>
          <div className="playground-row">
            <Badge>Neutral</Badge>
            <Badge variant="accent">Accent</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="warning">Warning</Badge>
            <Avatar>
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
            <Spinner />
          </div>

          <div className="playground-row">
            <Progress value={progress} aria-label="Demo progress" style={{ width: 220 }} />
            <Button variant="outline" onClick={() => setProgress((p) => (p + 20) % 120)}>
              Bump progress
            </Button>
          </div>

          <Card style={{ maxWidth: 320 }}>
            <CardHeader>
              <CardTitle>Card title</CardTitle>
            </CardHeader>
            <CardContent>Card content goes here.</CardContent>
          </Card>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Ada Lovelace</TableCell>
                <TableCell>Engineer</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </div>
      <Toaster />
    </TooltipProvider>
  );
}
