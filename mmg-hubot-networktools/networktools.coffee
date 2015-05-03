# Description:
#   Potentially useful network-related Hubot helpers.
#
# Commands:
#   ipaddress - returns the local (internal) ip address(s) of the machine that hubot is running. Helpful in situations where you're running a headless device (e.g., Raspberry Pi).
#
# Notes:
#   Hubot script adapted from the solution below:
#   http://stackoverflow.com/questions/3653065/get-local-ip-address-in-node-js
#
# Author:
#   andrewmarconi

os = require('os')
ifaces = os.networkInterfaces()

module.exports = (robot) ->
  robot.respond /ipaddress/i, (message) ->
    Object.keys(ifaces).forEach (ifname) ->
      alias = 0
      ifaces[ifname].forEach (iface) ->
        if 'IPv4' != iface.family or iface.internal != false
          return
        if alias >= 1
          message.send('For ' + ifname + ', I can be found at ' + alias + ' or ' + iface.address)
        else
          message.send('For ' + ifname + ', I can be found at ' + iface.address)
        return
      return