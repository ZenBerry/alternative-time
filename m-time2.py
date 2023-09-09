import time
from AppKit import NSStatusBar, NSMenu, NSMenuItem
from PyObjCTools import AppHelper

class CustomClockApp:
    def __init__(self):
        self.status_bar = NSStatusBar.systemStatusBar()
        self.status_item = self.status_bar.statusItemWithLength_(NSStatusBar.squareLength)  # Use squareLength
        self.status_item.setTitle_("Custom Clock")
        self.menu = NSMenu.alloc().init()
        self.status_item.setMenu_(self.menu)
        self.timer = None

    def start_clock(self):
        if not self.timer:
            self.timer = AppHelper.callAfter(self.update_clock, 0.960)  # 960 ms

    def stop_clock(self):
        if self.timer:
            self.timer.invalidate()
            self.timer = None

    def update_clock(self):
        self.status_item.setTitle_(self.get_current_time())
        self.timer = AppHelper.callAfter(self.update_clock, 0.960)  # Schedule the next update

    def get_current_time(self):
        return time.strftime("%H:%M:%S")

if __name__ == "__main__":
    app = CustomClockApp()
    start_menu_item = NSMenuItem.alloc().initWithTitle_action_keyEquivalent_("Start", "start_clock:", "")
    stop_menu_item = NSMenuItem.alloc().initWithTitle_action_keyEquivalent_("Stop", "stop_clock:", "")
    app.menu.addItem_(start_menu_item)
    app.menu.addItem_(stop_menu_item)
    AppHelper.runEventLoop()
